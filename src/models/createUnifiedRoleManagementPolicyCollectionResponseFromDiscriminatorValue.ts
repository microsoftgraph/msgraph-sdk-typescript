import { deserializeIntoUnifiedRoleManagementPolicyCollectionResponse } from './deserializeIntoUnifiedRoleManagementPolicyCollectionResponse';
import { type UnifiedRoleManagementPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyCollectionResponse;
}
