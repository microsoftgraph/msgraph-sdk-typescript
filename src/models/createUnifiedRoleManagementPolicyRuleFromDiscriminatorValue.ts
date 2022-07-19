import {UnifiedRoleManagementPolicyApprovalRule, UnifiedRoleManagementPolicyAuthenticationContextRule, UnifiedRoleManagementPolicyEnablementRule, UnifiedRoleManagementPolicyExpirationRule, UnifiedRoleManagementPolicyNotificationRule, UnifiedRoleManagementPolicyRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleManagementPolicyApprovalRule":
                    return new UnifiedRoleManagementPolicyApprovalRule();
                case "#microsoft.graph.unifiedRoleManagementPolicyAuthenticationContextRule":
                    return new UnifiedRoleManagementPolicyAuthenticationContextRule();
                case "#microsoft.graph.unifiedRoleManagementPolicyEnablementRule":
                    return new UnifiedRoleManagementPolicyEnablementRule();
                case "#microsoft.graph.unifiedRoleManagementPolicyExpirationRule":
                    return new UnifiedRoleManagementPolicyExpirationRule();
                case "#microsoft.graph.unifiedRoleManagementPolicyNotificationRule":
                    return new UnifiedRoleManagementPolicyNotificationRule();
            }
        }
    }
    return new UnifiedRoleManagementPolicyRule();
}
