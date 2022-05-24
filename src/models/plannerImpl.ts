import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerBucketImpl, PlannerPlanImpl, PlannerTaskImpl} from './index';
import {Planner} from './planner';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the planner singleton. */
export class PlannerImpl extends EntityImpl implements Parsable, Planner {
    /** Read-only. Nullable. Returns a collection of the specified buckets */
    public buckets?: PlannerBucket[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified plans */
    public plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified tasks */
    public tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new planner and sets the default values.
     * @param plannerParameterValue 
     */
    public constructor(plannerParameterValue?: Planner | undefined) {
        super();
        this.buckets = plannerParameterValue?.buckets ;
        this.plans = plannerParameterValue?.plans ;
        this.tasks = plannerParameterValue?.tasks ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<PlannerBucketImpl>(createPlannerBucketFromDiscriminatorValue); },
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlanImpl>(createPlannerPlanFromDiscriminatorValue); },
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
        if(this.buckets && this.buckets.length != 0){        const bucketsArrValue: PlannerBucketImpl[] = []; this.buckets?.forEach(element => {bucketsArrValue.push(new PlannerBucketImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.plans && this.plans.length != 0){        const plansArrValue: PlannerPlanImpl[] = []; this.plans?.forEach(element => {plansArrValue.push(new PlannerPlanImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerPlanImpl>("plans", plansArrValue);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PlannerTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
    };
}
