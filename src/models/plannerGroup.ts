import type {Entity} from './entity';
import type {PlannerPlan} from './plannerPlan';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerGroup extends Entity, Parsable {
    /**
     * Read-only. Nullable. Returns the plannerPlans owned by the group.
     */
    plans?: PlannerPlan[] | undefined;
}
