import {PlannerChecklistItems} from './plannerChecklistItems';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerChecklistItems(writer: SerializationWriter, plannerChecklistItems: PlannerChecklistItems | undefined = {} as PlannerChecklistItems) : void {
        writer.writeStringValue("@odata.type", plannerChecklistItems.odataType);
        writer.writeAdditionalData(plannerChecklistItems.additionalData);
}
