import { deserializeIntoUnifiedRoleManagementPolicy } from './deserializeIntoUnifiedRoleManagementPolicy';
import { type UnifiedRoleManagementPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicy;
}
