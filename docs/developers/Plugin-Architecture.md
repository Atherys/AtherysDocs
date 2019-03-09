# Plugin Architecture

A'therys plugins should all follow the same basic code architecture.

## Architecture Overview

![Diagram](./pluginArchitecture.png)

## General Rules

1. When creating nullable methods ( that is, methods which could return null ), it is best to return an `Optional` containing any possible result instead.
    * An exception to this is database entities. If a field in an entity class instance can be null, then the getter method used to access said field should return null as well.

2. Always write javadoc documentation for Facade, Service and Repository level methods where complex logical operations occur.
    * An exception to this is service methods which modify entities. For example, `setEntityField(Entity entity, Object value)`. In this case, the method name is explicit enough, and documentation would be unnecessary.
