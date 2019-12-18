---
title: Event Functions
module: event
---
# Event Functions
Functions responsible for attaching handling functions to events. These are best placed in the global scope, such that upon initial execution of the script ( see: onScriptStart ), the event handlers are registered appropriately.

## onScriptStart

Triggered when a script is started. This is completely at the discretion of the `ScriptService` implementation, though it is expected to be done during GameServerStartedEvent.

#### Signature:
```groovy
boolean onScriptStart(Consumer<ScriptStartEvent> handler)
```

#### Example:
```groovy
var success = onScriptStart( function(event) {
    info("Started Script: " + event.getScript().getId());
});
```

## onScriptReload

Triggered when a script is reloaded. This is completely at the discretion of the `ScriptService` implementation, though it is expected to be done upon a plugin reload using the `/sponge reload` command.

#### Signature:
```groovy
boolean onScriptReload(Consumer<ScriptReloadEvent> handler)
```

#### Example:
```groovy
def success = onScriptReload( function(event) {
    info("Reloaded Script: " + event.getScript().getId());
});
```

## onScriptStop

Triggered when a script is stopped. This is completely at the discretion of the `ScriptService` implementation, though it is expected to be done during a GameServerStoppingEvent.

#### Signature:
```groovy
boolean onScriptStop(Consumer<ScriptStopEvent> handler)
```

#### Example:
```groovy
def success = onScriptStop( function(event) {
    info("Stopped Script: " + event.getScript().getId());
});
```
