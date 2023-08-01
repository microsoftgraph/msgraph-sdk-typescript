import type {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import type {PlannerPlanDetails} from './plannerPlanDetails';
import type {PlannerUserIds} from './plannerUserIds';
import {serializeEntity} from './serializeEntity';
import {serializePlannerCategoryDescriptions} from './serializePlannerCategoryDescriptions';
import {serializePlannerUserIds} from './serializePlannerUserIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerPlanDetails(writer: SerializationWriter, plannerPlanDetails: PlannerPlanDetails | undefined = {} as PlannerPlanDetails) : void {
        serializeEntity(writer, plannerPlanDetails)
        writer.writeObjectValue<PlannerCategoryDescriptions>("categoryDescriptions", plannerPlanDetails.categoryDescriptions, serializePlannerCategoryDescriptions);
        writer.writeObjectValue<PlannerUserIds>("sharedWith", plannerPlanDetails.sharedWith, serializePlannerUserIds);
}
