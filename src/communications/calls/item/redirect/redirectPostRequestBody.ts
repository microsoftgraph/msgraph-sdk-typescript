import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';

export interface RedirectPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?:string | undefined;
    /** The targets property */
    targets?:InvitationParticipantInfo[] | undefined;
    /** The timeout property */
    timeout?:number | undefined;
}
