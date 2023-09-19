import { type AttendeeBase } from './attendeeBase';
import { type ResponseStatus } from './responseStatus';
import { type TimeSlot } from './timeSlot';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Attendee extends AttendeeBase, Parsable {
    /**
     * An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property isn't included in a response of a GET event.
     */
    proposedNewTime?: TimeSlot | undefined;
    /**
     * The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
     */
    status?: ResponseStatus | undefined;
}
