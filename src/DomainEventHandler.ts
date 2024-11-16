import { DomainEvent } from "./DomainEvent";

export interface DomainEventHandler {
    handle(DomainEvent: DomainEvent): Promise<void> | void;
}