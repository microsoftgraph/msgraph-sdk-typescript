import {deserializeIntoUnifiedRoleManagementPolicyNotificationRule} from './deserializeIntoUnifiedRoleManagementPolicyNotificationRule';
import {UnifiedRoleManagementPolicyNotificationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleManagementPolicyNotificationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleManagementPolicyNotificationRule;
}
