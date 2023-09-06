import { deserializeIntoUnifiedRoleManagementPolicyEnablementRule } from './deserializeIntoUnifiedRoleManagementPolicyEnablementRule';
import { type UnifiedRoleManagementPolicyEnablementRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyEnablementRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyEnablementRule;
}
