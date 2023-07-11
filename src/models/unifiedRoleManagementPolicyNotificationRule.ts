import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyNotificationRule extends Parsable, UnifiedRoleManagementPolicyRule {
    /**
     * Indicates whether a default recipient will receive the notification email.
     */
    isDefaultRecipientsEnabled?: boolean | undefined;
    /**
     * The level of notification. The possible values are None, Critical, All.
     */
    notificationLevel?: string | undefined;
    /**
     * The list of recipients of the email notifications.
     */
    notificationRecipients?: string[] | undefined;
    /**
     * The type of notification. Only Email is supported.
     */
    notificationType?: string | undefined;
    /**
     * The type of recipient of the notification. The possible values are Requestor, Approver, Admin.
     */
    recipientType?: string | undefined;
}
