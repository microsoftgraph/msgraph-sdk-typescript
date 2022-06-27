import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerBucketImpl, PlannerPlanImpl, PlannerTaskImpl} from './index';
import {Planner} from './planner';
import {PlannerBucket} from './plannerBucket';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerImpl extends EntityImpl implements Planner {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Read-only. Nullable. Returns a collection of the specified buckets */
    public buckets?: PlannerBucket[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified plans */
    public plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified tasks */
    public tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new Planner and sets the default values.
     * @param plannerParameterValue 
     */
    public constructor(plannerParameterValue?: Planner | undefined) {
        super(plannerParameterValue);
        this.additionalData = plannerParameterValue?.additionalData ? plannerParameterValue?.additionalData! : {};
        const bucketsArrValue: PlannerBucketImpl[] = []; plannerParameterValue.buckets?.forEach(element => {bucketsArrValue.push(element instanceof PlannerBucketImpl? element : new PlannerBucketImpl(element));});
        this.buckets = bucketsArrValue;
        const plansArrValue: PlannerPlanImpl[] = []; plannerParameterValue.plans?.forEach(element => {plansArrValue.push(element instanceof PlannerPlanImpl? element : new PlannerPlanImpl(element));});
        this.plans = plansArrValue;
        const tasksArrValue: PlannerTaskImpl[] = []; plannerParameterValue.tasks?.forEach(element => {tasksArrValue.push(element instanceof PlannerTaskImpl? element : new PlannerTaskImpl(element));});
        this.tasks = tasksArrValue;
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
        if(this.buckets && this.buckets.length != 0){        const bucketsArrValue: PlannerBucketImpl[] = []; this.buckets?.forEach(element => {bucketsArrValue.push(element instanceof PlannerBucketImpl? element : new PlannerBucketImpl(element));});
            writer.writeCollectionOfObjectValues<PlannerBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.plans && this.plans.length != 0){        const plansArrValue: PlannerPlanImpl[] = []; this.plans?.forEach(element => {plansArrValue.push(element instanceof PlannerPlanImpl? element : new PlannerPlanImpl(element));});
            writer.writeCollectionOfObjectValues<PlannerPlanImpl>("plans", plansArrValue);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(element instanceof PlannerTaskImpl? element : new PlannerTaskImpl(element));});
            writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
