import { DomainEvent } from "./DomainEvent";
import { EventBus } from "@hexaform/events";

export class DomainEventBus {
    protected eventBus: EventBus<any, any>;

    constructor(eventBus: EventBus<any, any>) {
        this.eventBus = eventBus;
    }

    async dispatch(DomainEvent: DomainEvent): Promise<void> {
        await this.eventBus.dispatch(DomainEvent);
    }
}