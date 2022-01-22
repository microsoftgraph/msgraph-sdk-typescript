import {Entity} from './entity';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Planner extends Entity implements Parsable {
    /** Read-only. Nullable. Returns a collection of the specified buckets  */
    private _buckets?: PlannerBucket[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified plans  */
    private _plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified tasks  */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new planner and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
     * @returns a plannerBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Gets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @returns a plannerPlan
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["buckets", (o, n) => { (o as unknown as Planner).buckets = n.getCollectionOfObjectValues<PlannerBucket>(PlannerBucket); }],
            ["plans", (o, n) => { (o as unknown as Planner).plans = n.getCollectionOfObjectValues<PlannerPlan>(PlannerPlan); }],
            ["tasks", (o, n) => { (o as unknown as Planner).tasks = n.getCollectionOfObjectValues<PlannerTask>(PlannerTask); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", this.buckets);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", this.plans);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
    };
    /**
     * Sets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        this._plans = value;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
