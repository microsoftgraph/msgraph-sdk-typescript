import {AttendeeAvailability} from './attendeeAvailability';
import {FreeBusyStatus} from './freeBusyStatus';
import {Location} from './location';
import {TimeSlot} from './timeSlot';

export interface MeetingTimeSuggestion{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** An array that shows the availability status of each attendee for this meeting suggestion. */
    attendeeAvailability?:AttendeeAvailability[] | undefined;
    /** A percentage that represents the likelhood of all the attendees attending. */
    confidence?:number | undefined;
    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion. */
    locations?:Location[] | undefined;
    /** A time period suggested for the meeting. */
    meetingTimeSlot?:TimeSlot | undefined;
    /** Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence. */
    order?:number | undefined;
    /** Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    organizerAvailability?:FreeBusyStatus | undefined;
    /** Reason for suggesting the meeting time. */
    suggestionReason?:string | undefined;
}
