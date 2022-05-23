import {BookingReminderRecipients} from './bookingReminderRecipients';
import {Duration} from '@microsoft/kiota-abstractions';

export interface BookingReminder{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The message in the reminder. */
    message?:string | undefined;
    /** The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format. */
    offset?:Duration | undefined;
    /** The persons who should receive the reminder. Possible values are: allAttendees, staff, customer and unknownFutureValue. */
    recipients?:BookingReminderRecipients | undefined;
}
