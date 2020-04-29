# Plugin Architecture 1.0

A'therys plugins should all follow the same basic code architecture.

## Architectural Diagram

<p style="text-align: center;"><img src="./pluginArchitecture.png"></p>

## Components

The architecture of A'therys plugins predicts the existence of 5 fundamental components, and 1 optional one. Ideally, this architecture is supported by the existence of Dependency Injection.

### 1. CommandExecutors / EventHandlers

Commands and events are _the_ way that minecraft plugins hook into and interact with the minecraft server. They are API-specific, and the way to implement a command or event handler changes depending on the API in use ( Sponge vs Spigot/Bukkit vs Forge ).

Because of this, it is very difficult to create multi-platform plugins. But more importantly, if any significant logic _is_ written inside EventHandlers and CommandExecutors, then it becomes very difficult for a third party ( such as another plugin ) to utilize that logic in their own code.

For this reason, all CommandExecutors and EventHandlers should do the bare minimum in filtering and validation in order to ensure the data they receive is at the very least present and relevant, and at the very most valid, before sending it off to the next layer below, which is the Facade layer.

### 2. Facades

Facades are a well-known object-oriented design pattern. It's goal is to provide a unified single interface for executing very specific actions with a system, without having to worry about further implementation details. You may simply call a method belonging to a facade, and rest easy in the thought that the plugin will do exactly what you have told it to, without having to make any supporting calls to other layers such as services or repositories.

**Facades in A'therys plugins** are used to represent actions which would occur when a player executes a command or during a certain event. The methods you would find within a Facade class would be highly focused and will execute a very specific task.

Furthermore, _modifying_ entities directly using setter methods should be avoided at the Facade level. Reading data using getters is fine and expected, but entities should only be modified at the Service layer and below. This means, in order to change a mutable entity object, you should have to call a service method.

The reason for this so the Facade doesn't need to concern itself with lower-level logic related to synchronizing with the database and updating other entities.

This convention results in a 2-layered approach to business logic. Both Services and Facades contain logic which is considered to be part of the business layer. Code in the Facades should be higher-level, and should concern itself with accomplishing the specific task that it has to, using the API.

### 3. Services

In the 2-layered approach, what remains for the Service layer then are very simple, straight-forward actions, usually to do with mutating entities, their relatives, and updating the database using Repositories.

Services are expected to offer basic CRUD operations, methods to update different parts of an entity, and sometimes more complicated operations depending on the requirements of the project. What is sure though, is that a Service will work very closely with the Repository layer, to ensure all changes are persisted properly.

It is acceptable for Service methods to have to be supported by other method calls ( perhaps even to methods in other services ). At this lower level of a plugin's architecture, it's all about making the smallest changes with the least amount of logic possible inside a method's body.

A service should not have to validate any of it's input. It should be the job of the caller to ensure the correct data is being passed to the method. As such, all validation is done at the Facade layer, and if any errors occur within the Service layer, it should be reported to the Facade layer using custom checked exceptions.

### 4. Entities

The entities themselves are the most basic building blocks of a plugin's architecture. They represent the data that the plugin is in charge of handling.

This is also where the player wrapper class lives ( if one is needed ). Entities in and of themselves **should never** contain any business logic whatsoever. They should provide getters, setters and other basic encapsulation methods which Services can use to modify the object.

### 5. Repositories

At the very bottom of the architecture sit Repository classes. These are responsible for keeping the database up-to-date on the latest changed to entities. 

It should never be the concern of a Service method how an entity is stored or updated in the database, that is a question answered by the implementation of the Repository.

From this layer, queries may be prepared and sent, entities may be persisted or deleted directly from the database.

### [ 6. API ] ( Optional )

Often times, third-parties want to accomplish more than what a Facade will offer. To do this, they would have to delve deeper into the architecture, down into the Service layer and perhaps even lower. 

However, it is a possibility for there to be multiple implementations for the same functionality. For such cases, it is recommended for there to be an API layer which sits above all Services, Entities and Repositories.

Thus, when a third-party wishes to do something lower level than a Facade might offer, they need not be concerned with further implementation details. 

## General Rules

1. Layers should not be accessing functionality which is considered higher level than them
    * An example here might be a Service method executing a method found in a Facade, or a Repository method executing a method found in a Service.

2. When creating nullable methods ( that is, methods which could return null ), it is best to return an `Optional` containing any possible result instead.
    * An exception to this is database entities. If a field in an entity class instance can be null, then the getter method used to access said field should return null as well.

3. Always write javadoc documentation for Facade, Service and Repository level methods where complex logical operations occur.
    * An exception to this is service methods which modify entities. For example, `setEntityField(Entity entity, Object value)`. In this case, the method name is explicit enough, and documentation would be unnecessary.

# Plugin Architecture 2.0

The previous version of this architecture presents inherent flaws when attempting to work with asynchronous operations. It is for this reason that, with AtherysCore version
2.0, the architecture of A'therys plugins will have to go through a radical and in-depth change. Most ( if not all ) business-level logic will likely be affected.

## The Problems With Architecture 1.0

Architecture 1.0.0 was modeled after standard backend architecture practices from enterprise server development. In that environment, accessing the database within the same
thread as the business logic is not an issue, as such applications are not what would be considered "real-time". They do not need the responsiveness of a game, or its 
performance. 

However, A'therys Architecture is aimed at guiding the creation of minecraft plugins, a game in which performance is vitally important. 1.0.0 was made performant via
extensive use of in-memory caching, which has worked quite well, but is implementation specific. On paper, if one were to access the database directly for every command, 
event or other request, performance could be sluggish at best.

This is compounded by the fact that 1.0.0 does not favor multi-server setups, and in fact was not created with such a setup in mind. Because of its dependency on in-memory
caching to meet performance requirements, it sacrifices the ability for multiple servers to share data. Therefore, the old architecture is not scalabale horizontally 
in practice.

## The Solution(s)

1. All plugins will have to access the database directly and remove their dependency on in-memory caching.
2. If caching is required, Redis can be used for such.
3. To reach performance requirements, asynchronous operations will be utilized.

### Remove In-Memory Caching

In-memory caching has been utilized since the inception of A'therys plugins to ensure a steady performance. However, each minecraft server instance occupies its own
memory space, and as such cannot share its cached objects with other servers. Presently, no requests are made to the database directly for querying. Instead, the database
is only modified in real-time, but read from a cache. The cache is updated with every modification of the database.

If 2 servers are running the same plugin, neither would be aware of the other's cache, and neither would be reading from the database to update their own. This presents 
obvious issues when it comes to sharing data between server instances.

For this reason, in-memory caching must be removed and replaced with an external caching system, like Redis.

### Redis

Redis is an external cache, which can be shared by multiple applications ( minecraft servers ). If all A'therys plugins used Redis for their caching, this would remove
many of the issues mentioned in the last section.

### Asynchronous Operations

Because in-memory caching is being eliminated, an alternative is required for performance optimization. The database can always be accessed asynchronously, which frees up
the minecraft server thread to continue its normal operation. Database access is often slow and unreliable in terms of performance, so this is always the preferred way to do
so.

AtherysCore 2 offers additional classes to be used by the implementation for queueing both asynchronous and synchronous operations. This is done via the use of the task
scheduler and the `CompletableFuture` class from the java standard library.

#### Examples ( TODO )