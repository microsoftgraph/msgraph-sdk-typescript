import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './unifiedRoleManagementPolicyAuthenticationContextRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule(unifiedRoleManagementPolicyAuthenticationContextRule: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined = {} as UnifiedRoleManagementPolicyAuthenticationContextRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyAuthenticationContextRule),
        "claimValue": n => { unifiedRoleManagementPolicyAuthenticationContextRule.claimValue = n.getStringValue(); },
        "isEnabled": n => { unifiedRoleManagementPolicyAuthenticationContextRule.isEnabled = n.getBooleanValue(); },
    }
}
