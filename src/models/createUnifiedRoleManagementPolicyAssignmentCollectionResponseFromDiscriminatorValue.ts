import {deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse} from './deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAssignmentCollectionResponse;
}
