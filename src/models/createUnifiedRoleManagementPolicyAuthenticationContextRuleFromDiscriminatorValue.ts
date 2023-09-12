import { deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule } from './deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule';
import { type UnifiedRoleManagementPolicyAuthenticationContextRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAuthenticationContextRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule;
}
