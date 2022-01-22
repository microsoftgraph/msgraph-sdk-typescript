import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlan extends Entity implements Parsable {
    /** Collection of buckets in the plan. Read-only. Nullable.  */
    private _buckets?: PlannerBucket[] | undefined;
    /** Read-only. The user who created the plan.  */
    private _createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?: Date | undefined;
    /** Additional details about the plan. Read-only. Nullable.  */
    private _details?: PlannerPlanDetails | undefined;
    /** ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.  */
    private _owner?: string | undefined;
    /** Collection of tasks in the plan. Read-only. Nullable.  */
    private _tasks?: PlannerTask[] | undefined;
    /** Required. Title of the plan.  */
    private _title?: string | undefined;
    /**
     * Instantiates a new plannerPlan and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @returns a plannerBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Gets the createdBy property value. Read-only. The user who created the plan.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the details property value. Additional details about the plan. Read-only. Nullable.
     * @returns a plannerPlanDetails
     */
    public get details() {
        return this._details;
    };
    /**
     * Gets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Gets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Gets the title property value. Required. Title of the plan.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["buckets", (o, n) => { (o as unknown as PlannerPlan).buckets = n.getCollectionOfObjectValues<PlannerBucket>(PlannerBucket); }],
            ["createdBy", (o, n) => { (o as unknown as PlannerPlan).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["createdDateTime", (o, n) => { (o as unknown as PlannerPlan).createdDateTime = n.getDateValue(); }],
            ["details", (o, n) => { (o as unknown as PlannerPlan).details = n.getObjectValue<PlannerPlanDetails>(PlannerPlanDetails); }],
            ["owner", (o, n) => { (o as unknown as PlannerPlan).owner = n.getStringValue(); }],
            ["tasks", (o, n) => { (o as unknown as PlannerPlan).tasks = n.getCollectionOfObjectValues<PlannerTask>(PlannerTask); }],
            ["title", (o, n) => { (o as unknown as PlannerPlan).title = n.getStringValue(); }],
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
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PlannerPlanDetails>("details", this.details);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Sets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Sets the createdBy property value. Read-only. The user who created the plan.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the details property value. Additional details about the plan. Read-only. Nullable.
     * @param value Value to set for the details property.
     */
    public set details(value: PlannerPlanDetails | undefined) {
        this._details = value;
    };
    /**
     * Sets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        this._owner = value;
    };
    /**
     * Sets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
    /**
     * Sets the title property value. Required. Title of the plan.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
