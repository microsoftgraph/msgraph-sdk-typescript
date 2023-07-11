import {Entity} from './entity';
import {PlannerPlan} from './plannerPlan';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerGroup extends Entity, Parsable {
    /**
     * Read-only. Nullable. Returns the plannerPlans owned by the group.
     */
    plans?: PlannerPlan[] | undefined;
}
