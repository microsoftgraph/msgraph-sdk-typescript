import { type PlannerOrderHintsByAssignee } from './plannerOrderHintsByAssignee';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerOrderHintsByAssignee(writer: SerializationWriter, plannerOrderHintsByAssignee: PlannerOrderHintsByAssignee | undefined = {} as PlannerOrderHintsByAssignee) : void {
        writer.writeStringValue("@odata.type", plannerOrderHintsByAssignee.odataType);
        writer.writeAdditionalData(plannerOrderHintsByAssignee.additionalData);
}
