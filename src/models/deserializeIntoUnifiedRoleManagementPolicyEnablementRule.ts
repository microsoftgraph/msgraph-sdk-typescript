import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyEnablementRule} from './unifiedRoleManagementPolicyEnablementRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyEnablementRule(unifiedRoleManagementPolicyEnablementRule: UnifiedRoleManagementPolicyEnablementRule | undefined = {} as UnifiedRoleManagementPolicyEnablementRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyEnablementRule),
        "enabledRules": n => { unifiedRoleManagementPolicyEnablementRule.enabledRules = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
