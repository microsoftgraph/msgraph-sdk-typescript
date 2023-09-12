import { type PlannerUserIds } from './plannerUserIds';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerUserIds(writer: SerializationWriter, plannerUserIds: PlannerUserIds | undefined = {} as PlannerUserIds) : void {
        writer.writeStringValue("@odata.type", plannerUserIds.odataType);
        writer.writeAdditionalData(plannerUserIds.additionalData);
}
