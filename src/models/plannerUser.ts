import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';

export interface PlannerUser extends Entity{
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    plans?:PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    tasks?:PlannerTask[] | undefined;
}
