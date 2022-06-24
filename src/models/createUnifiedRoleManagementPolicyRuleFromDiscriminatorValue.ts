import {UnifiedRoleManagementPolicyApprovalRuleImpl, UnifiedRoleManagementPolicyAuthenticationContextRuleImpl, UnifiedRoleManagementPolicyEnablementRuleImpl, UnifiedRoleManagementPolicyExpirationRuleImpl, UnifiedRoleManagementPolicyNotificationRuleImpl, UnifiedRoleManagementPolicyRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleManagementPolicyApprovalRule":
                    return new UnifiedRoleManagementPolicyApprovalRuleImpl();
                case "#microsoft.graph.unifiedRoleManagementPolicyAuthenticationContextRule":
                    return new UnifiedRoleManagementPolicyAuthenticationContextRuleImpl();
                case "#microsoft.graph.unifiedRoleManagementPolicyEnablementRule":
                    return new UnifiedRoleManagementPolicyEnablementRuleImpl();
                case "#microsoft.graph.unifiedRoleManagementPolicyExpirationRule":
                    return new UnifiedRoleManagementPolicyExpirationRuleImpl();
                case "#microsoft.graph.unifiedRoleManagementPolicyNotificationRule":
                    return new UnifiedRoleManagementPolicyNotificationRuleImpl();
            }
        }
    }
    return new UnifiedRoleManagementPolicyRuleImpl();
}
