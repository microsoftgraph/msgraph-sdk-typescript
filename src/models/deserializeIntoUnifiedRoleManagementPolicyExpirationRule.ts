import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyExpirationRule} from './unifiedRoleManagementPolicyExpirationRule';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyExpirationRule(unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {} as UnifiedRoleManagementPolicyExpirationRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyExpirationRule),
        "isExpirationRequired": n => { unifiedRoleManagementPolicyExpirationRule.isExpirationRequired = n.getBooleanValue(); },
        "maximumDuration": n => { unifiedRoleManagementPolicyExpirationRule.maximumDuration = n.getDurationValue(); },
    }
}
