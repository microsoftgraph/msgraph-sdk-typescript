import {deserializeIntoUnifiedRoleManagementPolicyRuleTarget} from './deserializeIntoUnifiedRoleManagementPolicyRuleTarget';
import {UnifiedRoleManagementPolicyRuleTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyRuleTarget;
}
