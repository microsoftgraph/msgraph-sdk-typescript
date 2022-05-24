import {MeetingParticipantInfo} from './meetingParticipantInfo';

export interface MeetingParticipants{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Information of the meeting attendees. */
    attendees?:MeetingParticipantInfo[] | undefined;
    /** Information of the meeting organizer. */
    organizer?:MeetingParticipantInfo | undefined;
}
