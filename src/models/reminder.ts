import type {DateTimeTimeZone} from './dateTimeTimeZone';
import type {Location} from './location';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Reminder extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object.
     */
    changeKey?: string | undefined;
    /**
     * The date, time and time zone that the event ends.
     */
    eventEndTime?: DateTimeTimeZone | undefined;
    /**
     * The unique ID of the event. Read only.
     */
    eventId?: string | undefined;
    /**
     * The location of the event.
     */
    eventLocation?: Location | undefined;
    /**
     * The date, time, and time zone that the event starts.
     */
    eventStartTime?: DateTimeTimeZone | undefined;
    /**
     * The text of the event's subject line.
     */
    eventSubject?: string | undefined;
    /**
     * The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
     */
    eventWebLink?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The date, time, and time zone that the reminder is set to occur.
     */
    reminderFireTime?: DateTimeTimeZone | undefined;
}
