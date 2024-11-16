import { AggregateRoot } from "./AggregateRoot";
import { DomainEventBus } from "./DomainEventBus";

export abstract class Repository<Aggregate extends AggregateRoot> {
    private domainEventBus: DomainEventBus;

    constructor(domainEventBus: DomainEventBus) {
        this.domainEventBus = domainEventBus;
    }

    protected abstract save(aggregateRoot: Aggregate): void;

    private async dispatchEvents(aggregateRoot: Aggregate): Promise<void> {
        let events = Reflect.get(aggregateRoot, "events");
        await Promise.all(events.map(this.domainEventBus.dispatch.bind(this.domainEventBus)));
    }

    public async persist(aggregateRoot: Aggregate): Promise<void> {
        await this.dispatchEvents(aggregateRoot);

        await this.save(aggregateRoot);
    }
}