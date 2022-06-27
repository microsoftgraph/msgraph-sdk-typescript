import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyNotificationRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether a default recipient will receive the notification email. */
    isDefaultRecipientsEnabled?: boolean | undefined;
    /** The level of notification. The possible values are None, Critical, All. */
    notificationLevel?: string | undefined;
    /** The list of recipients of the email notifications. */
    notificationRecipients?: string[] | undefined;
    /** The type of notification. Only Email is supported. */
    notificationType?: string | undefined;
    /** The type of recipient of the notification. The possible values are Requestor, Approver, Admin. */
    recipientType?: string | undefined;
}
