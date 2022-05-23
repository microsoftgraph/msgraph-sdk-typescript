import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';

export interface PlannerGroup extends Entity{
    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
    plans?:PlannerPlan[] | undefined;
}
