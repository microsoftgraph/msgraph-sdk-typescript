import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyExpirationRule} from './unifiedRoleManagementPolicyExpirationRule';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyExpirationRule(unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyExpirationRule),
        "isExpirationRequired": n => { unifiedRoleManagementPolicyExpirationRule.isExpirationRequired = n.getBooleanValue(); },
        "maximumDuration": n => { unifiedRoleManagementPolicyExpirationRule.maximumDuration = n.getDurationValue(); },
    }
}
