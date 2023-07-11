import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Event} from './event';
import {EventType} from './eventType';
import {Location} from './location';
import {MeetingMessageType} from './meetingMessageType';
import {Message} from './message';
import {PatternedRecurrence} from './patternedRecurrence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessage extends Message, Parsable {
    /**
     * The endDateTime property
     */
    endDateTime?: DateTimeTimeZone | undefined;
    /**
     * The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     */
    event?: Event | undefined;
    /**
     * The isAllDay property
     */
    isAllDay?: boolean | undefined;
    /**
     * The isDelegated property
     */
    isDelegated?: boolean | undefined;
    /**
     * The isOutOfDate property
     */
    isOutOfDate?: boolean | undefined;
    /**
     * The location property
     */
    location?: Location | undefined;
    /**
     * The meetingMessageType property
     */
    meetingMessageType?: MeetingMessageType | undefined;
    /**
     * The recurrence property
     */
    recurrence?: PatternedRecurrence | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: DateTimeTimeZone | undefined;
    /**
     * The type property
     */
    type?: EventType | undefined;
}
