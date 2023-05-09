import {createPlannerCategoryDescriptionsFromDiscriminatorValue} from './createPlannerCategoryDescriptionsFromDiscriminatorValue';
import {createPlannerUserIdsFromDiscriminatorValue} from './createPlannerUserIdsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {PlannerPlanDetails} from './plannerPlanDetails';
import {PlannerUserIds} from './plannerUserIds';
import {serializePlannerCategoryDescriptions} from './serializePlannerCategoryDescriptions';
import {serializePlannerUserIds} from './serializePlannerUserIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanDetails(plannerPlanDetails: PlannerPlanDetails | undefined = {} as PlannerPlanDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerPlanDetails),
        "categoryDescriptions": n => { plannerPlanDetails.categoryDescriptions = n.getObjectValue<PlannerCategoryDescriptions>(createPlannerCategoryDescriptionsFromDiscriminatorValue); },
        "sharedWith": n => { plannerPlanDetails.sharedWith = n.getObjectValue<PlannerUserIds>(createPlannerUserIdsFromDiscriminatorValue); },
    }
}
