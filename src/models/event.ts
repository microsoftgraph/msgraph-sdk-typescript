import {Attachment} from './attachment';
import {Attendee} from './attendee';
import {Calendar} from './calendar';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {EventType} from './eventType';
import {Extension} from './extension';
import {FreeBusyStatus} from './freeBusyStatus';
import {Importance} from './importance';
import {ItemBody} from './itemBody';
import {Location} from './location';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {OutlookItem} from './outlookItem';
import {PatternedRecurrence} from './patternedRecurrence';
import {Recipient} from './recipient';
import {ResponseStatus} from './responseStatus';
import {Sensitivity} from './sensitivity';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Event extends OutlookItem, Parsable {
    /**
     * true if the meeting organizer allows invitees to propose a new time when responding; otherwise, false. Optional. Default is true.
     */
    allowNewTimeProposals?: boolean | undefined;
    /**
     * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
     */
    attachments?: Attachment[] | undefined;
    /**
     * The collection of attendees for the event.
     */
    attendees?: Attendee[] | undefined;
    /**
     * The body of the message associated with the event. It can be in HTML or text format.
     */
    body?: ItemBody | undefined;
    /**
     * The preview of the message associated with the event. It is in text format.
     */
    bodyPreview?: string | undefined;
    /**
     * The calendar that contains the event. Navigation property. Read-only.
     */
    calendar?: Calendar | undefined;
    /**
     * The date, time, and time zone that the event ends. By default, the end time is in UTC.
     */
    end?: DateTimeTimeZone | undefined;
    /**
     * The collection of open extensions defined for the event. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * Set to true if the event has attachments.
     */
    hasAttachments?: boolean | undefined;
    /**
     * When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is false.
     */
    hideAttendees?: boolean | undefined;
    /**
     * A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series. Read-only.
     */
    iCalUId?: string | undefined;
    /**
     * The importance property
     */
    importance?: Importance | undefined;
    /**
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
     */
    instances?: Event[] | undefined;
    /**
     * The isAllDay property
     */
    isAllDay?: boolean | undefined;
    /**
     * The isCancelled property
     */
    isCancelled?: boolean | undefined;
    /**
     * The isDraft property
     */
    isDraft?: boolean | undefined;
    /**
     * The isOnlineMeeting property
     */
    isOnlineMeeting?: boolean | undefined;
    /**
     * The isOrganizer property
     */
    isOrganizer?: boolean | undefined;
    /**
     * The isReminderOn property
     */
    isReminderOn?: boolean | undefined;
    /**
     * The location property
     */
    location?: Location | undefined;
    /**
     * The locations property
     */
    locations?: Location[] | undefined;
    /**
     * The collection of multi-value extended properties defined for the event. Read-only. Nullable.
     */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * The onlineMeeting property
     */
    onlineMeeting?: OnlineMeetingInfo | undefined;
    /**
     * The onlineMeetingProvider property
     */
    onlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /**
     * The onlineMeetingUrl property
     */
    onlineMeetingUrl?: string | undefined;
    /**
     * The organizer property
     */
    organizer?: Recipient | undefined;
    /**
     * The originalEndTimeZone property
     */
    originalEndTimeZone?: string | undefined;
    /**
     * The originalStart property
     */
    originalStart?: Date | undefined;
    /**
     * The originalStartTimeZone property
     */
    originalStartTimeZone?: string | undefined;
    /**
     * The recurrence property
     */
    recurrence?: PatternedRecurrence | undefined;
    /**
     * The reminderMinutesBeforeStart property
     */
    reminderMinutesBeforeStart?: number | undefined;
    /**
     * The responseRequested property
     */
    responseRequested?: boolean | undefined;
    /**
     * The responseStatus property
     */
    responseStatus?: ResponseStatus | undefined;
    /**
     * The sensitivity property
     */
    sensitivity?: Sensitivity | undefined;
    /**
     * The seriesMasterId property
     */
    seriesMasterId?: string | undefined;
    /**
     * The showAs property
     */
    showAs?: FreeBusyStatus | undefined;
    /**
     * The collection of single-value extended properties defined for the event. Read-only. Nullable.
     */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * The start property
     */
    start?: DateTimeTimeZone | undefined;
    /**
     * The subject property
     */
    subject?: string | undefined;
    /**
     * The transactionId property
     */
    transactionId?: string | undefined;
    /**
     * The type property
     */
    type?: EventType | undefined;
    /**
     * The webLink property
     */
    webLink?: string | undefined;
}
