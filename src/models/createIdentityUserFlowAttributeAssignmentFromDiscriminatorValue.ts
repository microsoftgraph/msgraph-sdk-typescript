import {deserializeIntoIdentityUserFlowAttributeAssignment} from './deserializeIntoIdentityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeAssignment;
}
