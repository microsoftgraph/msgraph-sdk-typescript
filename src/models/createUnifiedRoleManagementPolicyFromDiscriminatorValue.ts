import {deserializeIntoUnifiedRoleManagementPolicy} from './deserializeIntoUnifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicy;
}
