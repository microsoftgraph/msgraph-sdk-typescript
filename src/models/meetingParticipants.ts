import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipants extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The attendees property
     */
    attendees?: MeetingParticipantInfo[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The organizer property
     */
    organizer?: MeetingParticipantInfo | undefined;
}
