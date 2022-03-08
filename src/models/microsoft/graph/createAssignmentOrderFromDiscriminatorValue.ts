import {AssignmentOrder} from './assignmentOrder';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignmentOrderFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignmentOrder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignmentOrder();
}
