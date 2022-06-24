import {UnifiedRoleManagementPolicyExpirationRuleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyExpirationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleManagementPolicyExpirationRuleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleManagementPolicyExpirationRuleImpl();
}
