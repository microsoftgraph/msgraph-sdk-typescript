import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyNotificationRule} from './unifiedRoleManagementPolicyNotificationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyNotificationRule(unifiedRoleManagementPolicyNotificationRule: UnifiedRoleManagementPolicyNotificationRule | undefined = {} as UnifiedRoleManagementPolicyNotificationRule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyNotificationRule),
        "isDefaultRecipientsEnabled": n => { unifiedRoleManagementPolicyNotificationRule.isDefaultRecipientsEnabled = n.getBooleanValue(); },
        "notificationLevel": n => { unifiedRoleManagementPolicyNotificationRule.notificationLevel = n.getStringValue(); },
        "notificationRecipients": n => { unifiedRoleManagementPolicyNotificationRule.notificationRecipients = n.getCollectionOfPrimitiveValues<string>(); },
        "notificationType": n => { unifiedRoleManagementPolicyNotificationRule.notificationType = n.getStringValue(); },
        "recipientType": n => { unifiedRoleManagementPolicyNotificationRule.recipientType = n.getStringValue(); },
    }
}
