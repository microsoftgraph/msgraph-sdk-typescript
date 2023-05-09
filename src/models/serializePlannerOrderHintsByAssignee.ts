import {PlannerOrderHintsByAssignee} from './plannerOrderHintsByAssignee';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerOrderHintsByAssignee(writer: SerializationWriter, plannerOrderHintsByAssignee: PlannerOrderHintsByAssignee | undefined = {} as PlannerOrderHintsByAssignee) : void {
        writer.writeStringValue("@odata.type", plannerOrderHintsByAssignee.odataType);
        writer.writeAdditionalData(plannerOrderHintsByAssignee.additionalData);
}
