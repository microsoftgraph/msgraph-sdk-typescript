import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerPlanImpl, PlannerTaskImpl} from './index';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {PlannerUser} from './plannerUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PlannerUserImpl extends EntityImpl implements PlannerUser {
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    private _plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerUser and sets the default values.
     * @param plannerUserParameterValue 
     */
    public constructor(plannerUserParameterValue?: PlannerUser | undefined) {
        super(plannerUserParameterValue);
        this._plans = plannerUserParameterValue?.plans;
        this._tasks = plannerUserParameterValue?.tasks;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "plans": n => { this.plans = n.getCollectionOfObjectValues<PlannerPlanImpl>(createPlannerPlanFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PlannerTaskImpl>(createPlannerTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @returns a PlannerPlanInterface
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
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
     * Gets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @returns a PlannerTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
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
