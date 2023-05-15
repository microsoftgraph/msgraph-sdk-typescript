import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from './deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAssignment;
}
