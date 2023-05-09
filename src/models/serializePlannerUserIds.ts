import {PlannerUserIds} from './plannerUserIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerUserIds(writer: SerializationWriter, plannerUserIds: PlannerUserIds | undefined = {} as PlannerUserIds) : void {
        writer.writeStringValue("@odata.type", plannerUserIds.odataType);
        writer.writeAdditionalData(plannerUserIds.additionalData);
}
