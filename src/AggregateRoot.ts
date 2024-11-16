import { DomainEvent } from "./DomainEvent";

export class AggregateRoot<DTO = {}> {
    private events: Array<DomainEvent> = [];

    protected readonly _id: string;
    protected __v: number;

    constructor(id: string = crypto.randomUUID(), _v: number = 0) {
        this._id = id;
        this.__v = _v;
    }

    get id(): string {
        return this._id;
    }

    protected emit(event: DomainEvent): void {
        this.events.push(event);
    }

    public destroy(): void {}
}