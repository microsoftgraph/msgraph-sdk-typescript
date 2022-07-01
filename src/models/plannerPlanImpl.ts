import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanContainerFromDiscriminatorValue} from './createPlannerPlanContainerFromDiscriminatorValue';
import {createPlannerPlanDetailsFromDiscriminatorValue} from './createPlannerPlanDetailsFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, PlannerBucketImpl, PlannerPlanContainerImpl, PlannerPlanDetailsImpl, PlannerTaskImpl} from './index';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerPlanContainer} from './plannerPlanContainer';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PlannerPlanImpl extends EntityImpl implements PlannerPlan {
    /** Collection of buckets in the plan. Read-only. Nullable. */
    private _buckets?: PlannerBucket[] | undefined;
    /** Identifies the container of the plan. After it is set, this property can’t be updated. Required. */
    private _container?: PlannerPlanContainer | undefined;
    /** Read-only. The user who created the plan. */
    private _createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** Additional details about the plan. Read-only. Nullable. */
    private _details?: PlannerPlanDetails | undefined;
    /** The owner property */
    private _owner?: string | undefined;
    /** Collection of tasks in the plan. Read-only. Nullable. */
    private _tasks?: PlannerTask[] | undefined;
    /** Required. Title of the plan. */
    private _title?: string | undefined;
    /**
     * Gets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @returns a PlannerBucketInterface
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Collection of buckets in the plan. Read-only. Nullable.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        if(value) {
            const bucketsArrValue: PlannerBucketImpl[] = [];
            this.buckets?.forEach(element => {
                bucketsArrValue.push((element instanceof PlannerBucketImpl? element as PlannerBucketImpl:new PlannerBucketImpl(element)));
            });
            this._buckets = bucketsArrValue;
        }
    };
    /**
     * Instantiates a new plannerPlan and sets the default values.
     * @param plannerPlanParameterValue 
     */
    public constructor(plannerPlanParameterValue?: PlannerPlan | undefined) {
        super(plannerPlanParameterValue);
        this._buckets = plannerPlanParameterValue?.buckets;
        this._container = plannerPlanParameterValue?.container;
        this._createdBy = plannerPlanParameterValue?.createdBy;
        this._createdDateTime = plannerPlanParameterValue?.createdDateTime;
        this._details = plannerPlanParameterValue?.details;
        this._owner = plannerPlanParameterValue?.owner;
        this._tasks = plannerPlanParameterValue?.tasks;
        this._title = plannerPlanParameterValue?.title;
    };
    /**
     * Gets the container property value. Identifies the container of the plan. After it is set, this property can’t be updated. Required.
     * @returns a PlannerPlanContainerInterface
     */
    public get container() {
        return this._container;
    };
    /**
     * Sets the container property value. Identifies the container of the plan. After it is set, this property can’t be updated. Required.
     * @param value Value to set for the container property.
     */
    public set container(value: PlannerPlanContainer | undefined) {
        if(value) {
            this._container = value instanceof PlannerPlanContainerImpl? value as PlannerPlanContainerImpl: new PlannerPlanContainerImpl(value);
        }
    };
    /**
     * Gets the createdBy property value. Read-only. The user who created the plan.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Read-only. The user who created the plan.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the details property value. Additional details about the plan. Read-only. Nullable.
     * @returns a PlannerPlanDetailsInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Additional details about the plan. Read-only. Nullable.
     * @param value Value to set for the details property.
     */
    public set details(value: PlannerPlanDetails | undefined) {
        if(value) {
            this._details = value instanceof PlannerPlanDetailsImpl? value as PlannerPlanDetailsImpl: new PlannerPlanDetailsImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<PlannerBucketImpl>(createPlannerBucketFromDiscriminatorValue); },
            "container": n => { this.container = n.getObjectValue<PlannerPlanContainerImpl>(createPlannerPlanContainerFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "details": n => { this.details = n.getObjectValue<PlannerPlanDetailsImpl>(createPlannerPlanDetailsFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTaskImpl>(createPlannerTaskFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the owner property value. The owner property
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner property
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        if(value) {
            this._owner = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.buckets && this.buckets.length != 0){        const bucketsArrValue: PlannerBucketImpl[] = [];
        this.buckets?.forEach(element => {
            bucketsArrValue.push((element instanceof PlannerBucketImpl? element as PlannerBucketImpl:new PlannerBucketImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PlannerBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.container){
            writer.writeObjectValue<PlannerPlanContainerImpl>("container", (this.container instanceof PlannerPlanContainerImpl? this.container as PlannerPlanContainerImpl: new PlannerPlanContainerImpl(this.container)));
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (this.createdBy instanceof IdentitySetImpl? this.createdBy as IdentitySetImpl: new IdentitySetImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.details){
            writer.writeObjectValue<PlannerPlanDetailsImpl>("details", (this.details instanceof PlannerPlanDetailsImpl? this.details as PlannerPlanDetailsImpl: new PlannerPlanDetailsImpl(this.details)));
        }
        if(this.owner){
            writer.writeStringValue("owner", this.owner);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof PlannerTaskImpl? element as PlannerTaskImpl:new PlannerTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
        if(this.title){
            writer.writeStringValue("title", this.title);
        }
    };
    /**
     * Gets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @returns a PlannerTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Collection of tasks in the plan. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        if(value) {
            const tasksArrValue: PlannerTaskImpl[] = [];
            this.tasks?.forEach(element => {
                tasksArrValue.push((element instanceof PlannerTaskImpl? element as PlannerTaskImpl:new PlannerTaskImpl(element)));
            });
            this._tasks = tasksArrValue;
        }
    };
    /**
     * Gets the title property value. Required. Title of the plan.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Required. Title of the plan.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        if(value) {
            this._title = value;
        }
    };
}
