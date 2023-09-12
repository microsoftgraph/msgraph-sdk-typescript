import { deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse } from './deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse';
import { type UnifiedRoleManagementPolicyAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse;
}
