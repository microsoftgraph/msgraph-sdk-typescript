import {deserializeIntoUnifiedRoleManagementPolicyApprovalRule} from './deserializeIntoUnifiedRoleManagementPolicyApprovalRule';
import {deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule} from './deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule';
import {deserializeIntoUnifiedRoleManagementPolicyEnablementRule} from './deserializeIntoUnifiedRoleManagementPolicyEnablementRule';
import {deserializeIntoUnifiedRoleManagementPolicyExpirationRule} from './deserializeIntoUnifiedRoleManagementPolicyExpirationRule';
import {deserializeIntoUnifiedRoleManagementPolicyNotificationRule} from './deserializeIntoUnifiedRoleManagementPolicyNotificationRule';
import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyApprovalRule, UnifiedRoleManagementPolicyAuthenticationContextRule, UnifiedRoleManagementPolicyEnablementRule, UnifiedRoleManagementPolicyExpirationRule, UnifiedRoleManagementPolicyNotificationRule, UnifiedRoleManagementPolicyRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleManagementPolicyApprovalRule":
                    return deserializeIntoUnifiedRoleManagementPolicyApprovalRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyAuthenticationContextRule":
                    return deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyEnablementRule":
                    return deserializeIntoUnifiedRoleManagementPolicyEnablementRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyExpirationRule":
                    return deserializeIntoUnifiedRoleManagementPolicyExpirationRule;
                case "#microsoft.graph.unifiedRoleManagementPolicyNotificationRule":
                    return deserializeIntoUnifiedRoleManagementPolicyNotificationRule;
            }
        }
    }
    return deserializeIntoUnifiedRoleManagementPolicyRule;
}
