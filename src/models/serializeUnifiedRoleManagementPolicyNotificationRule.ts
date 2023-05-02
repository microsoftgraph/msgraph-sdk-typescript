import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyNotificationRule} from './unifiedRoleManagementPolicyNotificationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyNotificationRule(writer: SerializationWriter, unifiedRoleManagementPolicyNotificationRule: UnifiedRoleManagementPolicyNotificationRule | undefined = {} as UnifiedRoleManagementPolicyNotificationRule) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyNotificationRule)
        writer.writeBooleanValue("isDefaultRecipientsEnabled", unifiedRoleManagementPolicyNotificationRule.isDefaultRecipientsEnabled);
        writer.writeStringValue("notificationLevel", unifiedRoleManagementPolicyNotificationRule.notificationLevel);
        writer.writeCollectionOfPrimitiveValues<string>("notificationRecipients", unifiedRoleManagementPolicyNotificationRule.notificationRecipients);
        writer.writeStringValue("notificationType", unifiedRoleManagementPolicyNotificationRule.notificationType);
        writer.writeStringValue("recipientType", unifiedRoleManagementPolicyNotificationRule.recipientType);
}
