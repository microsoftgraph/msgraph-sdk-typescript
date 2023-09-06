import { deserializeIntoAssignmentOrder } from './deserializeIntoAssignmentOrder';
import { type AssignmentOrder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAssignmentOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAssignmentOrder;
}
