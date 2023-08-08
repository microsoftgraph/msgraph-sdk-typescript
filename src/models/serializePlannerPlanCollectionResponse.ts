import type {PlannerPlan} from './plannerPlan';
import type {PlannerPlanCollectionResponse} from './plannerPlanCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerPlan} from './serializePlannerPlan';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanCollectionResponse(writer: SerializationWriter, plannerPlanCollectionResponse: PlannerPlanCollectionResponse | undefined = {} as PlannerPlanCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerPlanCollectionResponse)
        writer.writeCollectionOfObjectValues<PlannerPlan>("value", plannerPlanCollectionResponse.value, serializePlannerPlan);
}
