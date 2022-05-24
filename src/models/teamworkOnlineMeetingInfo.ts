import {TeamworkUserIdentity} from './teamworkUserIdentity';

export interface TeamworkOnlineMeetingInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The identifier of the calendar event associated with the meeting. */
    calendarEventId?:string | undefined;
    /** The URL which can be clicked on to join or uniquely identify the meeting. */
    joinWebUrl?:string | undefined;
    /** The organizer of the meeting. */
    organizer?:TeamworkUserIdentity | undefined;
}
