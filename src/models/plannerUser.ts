import { type Entity } from './entity';
import { type PlannerPlan } from './plannerPlan';
import { type PlannerTask } from './plannerTask';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
