import {AttendeeBase} from './attendeeBase';
import {FreeBusyStatus} from './freeBusyStatus';

export interface AttendeeAvailability{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's a person. */
    attendee?:AttendeeBase | undefined;
    /** The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    availability?:FreeBusyStatus | undefined;
}
