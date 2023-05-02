import {deserializeIntoUnifiedRoleManagementPolicyCollectionResponse} from './deserializeIntoUnifiedRoleManagementPolicyCollectionResponse';
import {UnifiedRoleManagementPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyCollectionResponse;
}
