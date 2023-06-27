import {BookingReminderRecipients} from './bookingReminderRecipients';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingReminder extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The message in the reminder.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     */
    offset?: Duration | undefined;
    /**
     * The recipients property
     */
    recipients?: BookingReminderRecipients | undefined;
}
