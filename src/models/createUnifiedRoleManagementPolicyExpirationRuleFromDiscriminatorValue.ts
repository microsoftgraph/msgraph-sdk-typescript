import {UnifiedRoleManagementPolicyExpirationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyExpirationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyExpirationRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyExpirationRule();
}
