import { deserializeIntoUnifiedRoleManagementPolicyRuleTarget } from './deserializeIntoUnifiedRoleManagementPolicyRuleTarget';
import { type UnifiedRoleManagementPolicyRuleTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyRuleTarget;
}
