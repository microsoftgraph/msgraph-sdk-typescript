import { type InvitationParticipantInfo } from '../../../../models/invitationParticipantInfo';
import { type ParticipantInfo } from '../../../../models/participantInfo';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface TransferPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The transferee property
     */
    transferee?: ParticipantInfo | undefined;
    /**
     * The transferTarget property
     */
    transferTarget?: InvitationParticipantInfo | undefined;
}
