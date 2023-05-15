import {deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule} from './deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule';
import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyAuthenticationContextRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyAuthenticationContextRule;
}
