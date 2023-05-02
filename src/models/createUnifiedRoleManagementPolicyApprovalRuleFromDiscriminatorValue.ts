import {deserializeIntoUnifiedRoleManagementPolicyApprovalRule} from './deserializeIntoUnifiedRoleManagementPolicyApprovalRule';
import {UnifiedRoleManagementPolicyApprovalRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyApprovalRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyApprovalRule;
}
