import {IdentitySet} from './identitySet';
import {OnlineMeetingRole} from './onlineMeetingRole';

export interface MeetingParticipantInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Identity information of the participant. */
    identity?:IdentitySet | undefined;
    /** Specifies the participant's role in the meeting. */
    role?:OnlineMeetingRole | undefined;
    /** User principal name of the participant. */
    upn?:string | undefined;
}
