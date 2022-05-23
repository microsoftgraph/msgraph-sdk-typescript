import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {ParticipantInfo} from '../../../../models/participantInfo';

export interface TransferPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The transferee property */
    transferee?:ParticipantInfo | undefined;
    /** The transferTarget property */
    transferTarget?:InvitationParticipantInfo | undefined;
}
