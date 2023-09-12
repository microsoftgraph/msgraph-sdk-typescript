import { type AssignmentOrder } from './assignmentOrder';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignmentOrder(assignmentOrder: AssignmentOrder | undefined = {} as AssignmentOrder) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { assignmentOrder.odataType = n.getStringValue(); },
        "order": n => { assignmentOrder.order = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
