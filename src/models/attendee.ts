import {AttendeeBase} from './attendeeBase';
import {ResponseStatus} from './responseStatus';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Attendee extends Partial<AdditionalDataHolder>, AttendeeBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event. */
    proposedNewTime?: TimeSlot | undefined;
    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent. */
    status?: ResponseStatus | undefined;
}
