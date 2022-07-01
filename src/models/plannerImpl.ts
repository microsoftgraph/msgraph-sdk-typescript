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
export class PlannerImpl extends EntityImpl implements Planner {
    /** Read-only. Nullable. Returns a collection of the specified buckets */
    private _buckets?: PlannerBucket[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified plans */
    private _plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified tasks */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Gets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
     * @returns a PlannerBucketInterface
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Read-only. Nullable. Returns a collection of the specified buckets
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
     * Instantiates a new planner and sets the default values.
     * @param plannerParameterValue 
     */
    public constructor(plannerParameterValue?: Planner | undefined) {
        super(plannerParameterValue);
        this._buckets = plannerParameterValue?.buckets;
        this._plans = plannerParameterValue?.plans;
        this._tasks = plannerParameterValue?.tasks;
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
     * Gets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @returns a PlannerPlanInterface
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns a collection of the specified plans
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        if(value) {
            const plansArrValue: PlannerPlanImpl[] = [];
            this.plans?.forEach(element => {
                plansArrValue.push((element instanceof PlannerPlanImpl? element as PlannerPlanImpl:new PlannerPlanImpl(element)));
            });
            this._plans = plansArrValue;
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
        if(this.plans && this.plans.length != 0){        const plansArrValue: PlannerPlanImpl[] = [];
        this.plans?.forEach(element => {
            plansArrValue.push((element instanceof PlannerPlanImpl? element as PlannerPlanImpl:new PlannerPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PlannerPlanImpl>("plans", plansArrValue);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof PlannerTaskImpl? element as PlannerTaskImpl:new PlannerTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
     * @returns a PlannerTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns a collection of the specified tasks
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
