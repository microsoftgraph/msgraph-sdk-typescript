import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerTaskImpl} from './index';
import {PlannerBucket} from './plannerBucket';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PlannerBucketImpl extends EntityImpl implements PlannerBucket {
    /** Name of the bucket. */
    private _name?: string | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    private _orderHint?: string | undefined;
    /** Plan ID to which the bucket belongs. */
    private _planId?: string | undefined;
    /** Read-only. Nullable. The collection of tasks in the bucket. */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerBucket and sets the default values.
     * @param plannerBucketParameterValue 
     */
    public constructor(plannerBucketParameterValue?: PlannerBucket | undefined) {
        super(plannerBucketParameterValue);
        this._name = plannerBucketParameterValue?.name;
        this._orderHint = plannerBucketParameterValue?.orderHint;
        this._planId = plannerBucketParameterValue?.planId;
        this._tasks = plannerBucketParameterValue?.tasks;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "name": n => { this.name = n.getStringValue(); },
            "orderHint": n => { this.orderHint = n.getStringValue(); },
            "planId": n => { this.planId = n.getStringValue(); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTaskImpl>(createPlannerTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. Name of the bucket.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the bucket.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Sets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        if(value) {
            this._orderHint = value;
        }
    };
    /**
     * Gets the planId property value. Plan ID to which the bucket belongs.
     * @returns a string
     */
    public get planId() {
        return this._planId;
    };
    /**
     * Sets the planId property value. Plan ID to which the bucket belongs.
     * @param value Value to set for the planId property.
     */
    public set planId(value: string | undefined) {
        if(value) {
            this._planId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.orderHint){
            writer.writeStringValue("orderHint", this.orderHint);
        }
        if(this.planId){
            writer.writeStringValue("planId", this.planId);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof PlannerTaskImpl? element as PlannerTaskImpl:new PlannerTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
     * @returns a PlannerTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
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
}
