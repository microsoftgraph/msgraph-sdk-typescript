import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewNotificationRecipientItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Determines the recipient of the notification email.
     */
    notificationRecipientScope?: AccessReviewNotificationRecipientScope | undefined;
    /**
     * Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.
     */
    notificationTemplateType?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
