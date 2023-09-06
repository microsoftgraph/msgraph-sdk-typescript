import { deserializeIntoIdentityUserFlowAttributeAssignment } from './deserializeIntoIdentityUserFlowAttributeAssignment';
import { type IdentityUserFlowAttributeAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityUserFlowAttributeAssignment;
}
