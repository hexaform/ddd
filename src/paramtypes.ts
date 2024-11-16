// @ts-nocheck

import { AggregateRoot as AggregateRoot_1 } from "./AggregateRoot";
    Object.defineProperty(AggregateRoot_1.prototype, "reflect:paramtypes", { get() { return [ "undefined", "undefined" ]; }});
  import { DomainEvent as DomainEvent_1 } from "./DomainEvent";
    Object.defineProperty(AggregateRoot_1.prototype.emit, "reflect:paramtypes", { get() { return [ DomainEvent_1 ]; }});
    Object.defineProperty(AggregateRoot_1.prototype.destroy, "reflect:paramtypes", { get() { return [  ]; }});

import { DomainEventBus as DomainEventBus_1 } from "./DomainEventBus";
  import { EventBus as EventBus_1 } from "@hexaform/events";
    Object.defineProperty(DomainEventBus_1.prototype, "reflect:paramtypes", { get() { return [ EventBus_1 ]; }});
  import { DomainEvent as DomainEvent_2 } from "./DomainEvent";
    Object.defineProperty(DomainEventBus_1.prototype.dispatch, "reflect:paramtypes", { get() { return [ DomainEvent_2 ]; }});

import { ReflectiveDomainEventBus as ReflectiveDomainEventBus_1 } from "./ReflectiveDomainEventBus";
  import { Container as Container_1 } from "@hexaform/container";
    Object.defineProperty(ReflectiveDomainEventBus_1.prototype, "reflect:paramtypes", { get() { return [ Container_1 ]; }});
    Object.defineProperty(ReflectiveDomainEventBus_1.prototype.register, "reflect:paramtypes", { get() { return [ "undefined" ]; }});

import { Repository as Repository_1 } from "./Repository";
  import { DomainEventBus as DomainEventBus_2 } from "./DomainEventBus";
    Object.defineProperty(Repository_1.prototype, "reflect:paramtypes", { get() { return [ DomainEventBus_2 ]; }});
    Object.defineProperty(Repository_1.prototype.dispatchEvents, "reflect:paramtypes", { get() { return [ "undefined" ]; }});
    Object.defineProperty(Repository_1.prototype.persist, "reflect:paramtypes", { get() { return [ "undefined" ]; }});
