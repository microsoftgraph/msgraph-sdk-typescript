import { deserializeIntoUnifiedRoleManagementPolicyRule } from './deserializeIntoUnifiedRoleManagementPolicyRule';
import { type UnifiedRoleManagementPolicyExpirationRule } from './unifiedRoleManagementPolicyExpirationRule';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyExpirationRule(unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyExpirationRule),
        "isExpirationRequired": n => { unifiedRoleManagementPolicyExpirationRule.isExpirationRequired = n.getBooleanValue(); },
        "maximumDuration": n => { unifiedRoleManagementPolicyExpirationRule.maximumDuration = n.getDurationValue(); },
    }
}
