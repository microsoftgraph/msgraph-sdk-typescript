import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleManagementPolicyRule":
                    return new UnifiedRoleManagementPolicyRuleImpl();
            }
        }
    }
    return new UnifiedRoleManagementPolicyRuleImpl();
}
