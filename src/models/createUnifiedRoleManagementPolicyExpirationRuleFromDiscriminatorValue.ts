import {deserializeIntoUnifiedRoleManagementPolicyExpirationRule} from './deserializeIntoUnifiedRoleManagementPolicyExpirationRule';
import {UnifiedRoleManagementPolicyExpirationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyExpirationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyExpirationRule;
}
