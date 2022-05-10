import {UnifiedRoleManagementPolicyRuleTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyRuleTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyRuleTargetImpl();
}
