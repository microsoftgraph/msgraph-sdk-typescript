import { deserializeIntoUnifiedRoleManagementPolicyExpirationRule } from './deserializeIntoUnifiedRoleManagementPolicyExpirationRule';
import { type UnifiedRoleManagementPolicyExpirationRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyExpirationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyExpirationRule;
}
