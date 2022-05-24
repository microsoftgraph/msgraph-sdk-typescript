import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerTaskImpl} from './index';
import {PlannerBucket} from './plannerBucket';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class PlannerBucketImpl extends EntityImpl implements Parsable, PlannerBucket {
    /** Name of the bucket. */
    public name?: string | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    public orderHint?: string | undefined;
    /** Plan ID to which the bucket belongs. */
    public planId?: string | undefined;
    /** Read-only. Nullable. The collection of tasks in the bucket. */
    public tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerBucket and sets the default values.
     * @param plannerBucketParameterValue 
     */
    public constructor(plannerBucketParameterValue?: PlannerBucket | undefined) {
        super();
        this.name = plannerBucketParameterValue?.name ;
        this.orderHint = plannerBucketParameterValue?.orderHint ;
        this.planId = plannerBucketParameterValue?.planId ;
        this.tasks = plannerBucketParameterValue?.tasks ;
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
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PlannerTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
    };
}
