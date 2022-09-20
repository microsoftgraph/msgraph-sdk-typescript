import {UnifiedRoleManagementPolicyEnablementRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyEnablementRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyEnablementRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyEnablementRule();
}
