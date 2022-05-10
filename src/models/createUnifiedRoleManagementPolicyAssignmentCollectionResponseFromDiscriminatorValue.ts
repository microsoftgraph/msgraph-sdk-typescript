import {UnifiedRoleManagementPolicyAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyAssignmentCollectionResponseImpl();
}
