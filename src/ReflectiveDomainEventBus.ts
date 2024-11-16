import { DomainEventBus } from "./DomainEventBus";
import { DomainEventHandler } from "./DomainEventHandler";
import { Container } from "@hexaform/container";
import { EventBus } from "@hexaform/events";

type Class<T> = {
    new (...args: any[]): T;
};

export class ReflectiveDomainEventBus extends DomainEventBus {
    constructor(container: Container) {
        super(new EventBus<any, any>(container));
    }

    register(handler: Class<DomainEventHandler>) {
        this.eventBus.subscribe(handler.prototype.handle["reflect:paramtypes"].pop(), handler);
    }
}