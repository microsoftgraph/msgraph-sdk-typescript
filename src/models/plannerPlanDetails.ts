import { type Entity } from './entity';
import { type PlannerCategoryDescriptions } from './plannerCategoryDescriptions';
import { type PlannerUserIds } from './plannerUserIds';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PlannerPlanDetails extends Entity, Parsable {
    /**
     * An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan.
     */
    categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /**
     * Set of user IDs that this plan is shared with. If you're using Microsoft 365 groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it isn't required for them to access the plan owned by the group.
     */
    sharedWith?: PlannerUserIds | undefined;
}
