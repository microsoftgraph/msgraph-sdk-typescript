import {Entity} from './entity';
import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {PlannerUserIds} from './plannerUserIds';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanDetails extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan */
    categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /** The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required in order for them to access the plan owned by the group. */
    sharedWith?: PlannerUserIds | undefined;
}
