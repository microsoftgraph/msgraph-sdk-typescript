import { deserializeIntoUnifiedRoleManagementPolicyAssignment } from './deserializeIntoUnifiedRoleManagementPolicyAssignment';
import { type UnifiedRoleManagementPolicyAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAssignment;
}
