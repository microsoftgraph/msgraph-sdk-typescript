import { type AssignmentOrder } from './assignmentOrder';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssignmentOrder(writer: SerializationWriter, assignmentOrder: AssignmentOrder | undefined = {} as AssignmentOrder) : void {
        writer.writeStringValue("@odata.type", assignmentOrder.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("order", assignmentOrder.order);
        writer.writeAdditionalData(assignmentOrder.additionalData);
}
