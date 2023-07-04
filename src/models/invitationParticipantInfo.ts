import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InvitationParticipantInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Optional. Whether to hide the participant from the roster.
     */
    hidden?: boolean | undefined;
    /**
     * The identity property
     */
    identity?: IdentitySet | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Optional. The ID of the target participant.
     */
    participantId?: string | undefined;
    /**
     * Optional. Whether to remove them from the main mixer.
     */
    removeFromDefaultAudioRoutingGroup?: boolean | undefined;
    /**
     * Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully.
     */
    replacesCallId?: string | undefined;
}
