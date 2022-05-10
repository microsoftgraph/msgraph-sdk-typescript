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

export class PlannerPlanImpl extends EntityImpl implements Parsable, PlannerPlan {
    /** Collection of buckets in the plan. Read-only. Nullable.  */
    buckets?: PlannerBucket[] | undefined;
    /** Identifies the container of the plan. After it is set, this property can’t be updated. Required.  */
    container?: PlannerPlanContainer | undefined;
    /** Read-only. The user who created the plan.  */
    createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    createdDateTime?: Date | undefined;
    /** Additional details about the plan. Read-only. Nullable.  */
    details?: PlannerPlanDetails | undefined;
    /** ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.  */
    owner?: string | undefined;
    /** Collection of tasks in the plan. Read-only. Nullable.  */
    tasks?: PlannerTask[] | undefined;
    /** Required. Title of the plan.  */
    title?: string | undefined;
    /**
     * Instantiates a new plannerPlan and sets the default values.
     * @param plannerPlanParameterValue 
     */
    public constructor(plannerPlanParameterValue?: PlannerPlan | undefined) {
        super();
        this.buckets = plannerPlanParameterValue?.buckets ;
        this.container = plannerPlanParameterValue?.container ;
        this.createdBy = plannerPlanParameterValue?.createdBy ;
        this.createdDateTime = plannerPlanParameterValue?.createdDateTime ;
        this.details = plannerPlanParameterValue?.details ;
        this.owner = plannerPlanParameterValue?.owner ;
        this.tasks = plannerPlanParameterValue?.tasks ;
        this.title = plannerPlanParameterValue?.title ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.buckets){
        const bucketsArrValue: PlannerBucketImpl[] = []; this.buckets?.forEach(element => {bucketsArrValue.push(new PlannerBucketImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.container){
        if(this.container)
        writer.writeObjectValue<PlannerPlanContainerImpl>("container", new PlannerPlanContainerImpl(this.container));
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.details){
        if(this.details)
        writer.writeObjectValue<PlannerPlanDetailsImpl>("details", new PlannerPlanDetailsImpl(this.details));
        }
        if(this.owner){
        if(this.owner)
        writer.writeStringValue("owner", this.owner);
        }
        if(this.tasks){
        const tasksArrValue: PlannerTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PlannerTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
        if(this.title){
        if(this.title)
        writer.writeStringValue("title", this.title);
        }
    };
}
