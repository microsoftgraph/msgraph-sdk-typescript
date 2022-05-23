import {UnifiedRoleManagementPolicyAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyAssignmentImpl();
}
