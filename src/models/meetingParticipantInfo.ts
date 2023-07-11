import {IdentitySet} from './identitySet';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipantInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Identity information of the participant.
     */
    identity?: IdentitySet | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the participant's role in the meeting.
     */
    role?: OnlineMeetingRole | undefined;
    /**
     * User principal name of the participant.
     */
    upn?: string | undefined;
}
