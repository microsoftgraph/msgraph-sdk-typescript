import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {EntityImpl, PlannerPlanImpl, PlannerTaskImpl} from './index';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {PlannerUser} from './plannerUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class PlannerUserImpl extends EntityImpl implements Parsable, PlannerUser {
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    public plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    public tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerUser and sets the default values.
     * @param plannerUserParameterValue 
     */
    public constructor(plannerUserParameterValue?: PlannerUser | undefined) {
        super();
        this.plans = plannerUserParameterValue?.plans ;
        this.tasks = plannerUserParameterValue?.tasks ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.plans && this.plans.length != 0){        const plansArrValue: PlannerPlanImpl[] = []; this.plans?.forEach(element => {plansArrValue.push(new PlannerPlanImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerPlanImpl>("plans", plansArrValue);
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PlannerTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PlannerTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PlannerTaskImpl>("tasks", tasksArrValue);
        }
    };
}
