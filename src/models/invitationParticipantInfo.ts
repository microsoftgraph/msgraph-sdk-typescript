import {IdentitySet} from './identitySet';

export interface InvitationParticipantInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The hidden property */
    hidden?:boolean | undefined;
    /** The identity property */
    identity?:IdentitySet | undefined;
    /** Optional. The ID of the target participant. */
    participantId?:string | undefined;
    /** The removeFromDefaultAudioRoutingGroup property */
    removeFromDefaultAudioRoutingGroup?:boolean | undefined;
    /** Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully. */
    replacesCallId?:string | undefined;
}
