import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipants extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Information of the meeting attendees. */
    attendees?: MeetingParticipantInfo[] | undefined;
    /** Information of the meeting organizer. */
    organizer?: MeetingParticipantInfo | undefined;
}
