import { type PlannerChecklistItems } from './plannerChecklistItems';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerChecklistItems(writer: SerializationWriter, plannerChecklistItems: PlannerChecklistItems | undefined = {} as PlannerChecklistItems) : void {
        writer.writeStringValue("@odata.type", plannerChecklistItems.odataType);
        writer.writeAdditionalData(plannerChecklistItems.additionalData);
}
