import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';
import {PlannerTask} from './plannerTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerUser extends Entity, Parsable {
    /**
     * Read-only. Nullable. Returns the plannerTasks assigned to the user.
     */
    plans?: PlannerPlan[] | undefined;
    /**
     * Read-only. Nullable. Returns the plannerPlans shared with the user.
     */
    tasks?: PlannerTask[] | undefined;
}
