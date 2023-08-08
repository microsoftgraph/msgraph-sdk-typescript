import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyEnablementRule} from './unifiedRoleManagementPolicyEnablementRule';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyEnablementRule(unifiedRoleManagementPolicyEnablementRule: UnifiedRoleManagementPolicyEnablementRule | undefined = {} as UnifiedRoleManagementPolicyEnablementRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyEnablementRule),
        "enabledRules": n => { unifiedRoleManagementPolicyEnablementRule.enabledRules = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
