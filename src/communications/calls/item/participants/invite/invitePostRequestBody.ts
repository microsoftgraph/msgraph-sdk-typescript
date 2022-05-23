import {InvitationParticipantInfo} from '../../../../../models/invitationParticipantInfo';

export interface InvitePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The clientContext property */
    clientContext?:string | undefined;
    /** The participants property */
    participants?:InvitationParticipantInfo[] | undefined;
}
