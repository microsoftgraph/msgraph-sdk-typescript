import {createPlannerPlanFromDiscriminatorValue} from './createPlannerPlanFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PlannerPlan} from './plannerPlan';
import type {PlannerPlanCollectionResponse} from './plannerPlanCollectionResponse';
import {serializePlannerPlan} from './serializePlannerPlan';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanCollectionResponse(plannerPlanCollectionResponse: PlannerPlanCollectionResponse | undefined = {} as PlannerPlanCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerPlanCollectionResponse),
        "value": n => { plannerPlanCollectionResponse.value = n.getCollectionOfObjectValues<PlannerPlan>(createPlannerPlanFromDiscriminatorValue); },
    }
}
