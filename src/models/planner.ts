import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {Entity, PlannerBucket, PlannerPlan, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Planner extends Entity implements Parsable {
    /** Read-only. Nullable. Returns a collection of the specified buckets */
    private _buckets?: PlannerBucket[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified plans */
    private _plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified tasks */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Gets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
     * @returns a plannerBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Instantiates a new Planner and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.planner";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); },
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @returns a plannerPlan
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        this._plans = value;
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
     * Gets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
