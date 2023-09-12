import { type InvitationParticipantInfo } from '../../../../models/invitationParticipantInfo';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface RedirectPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The callbackUri property
     */
    callbackUri?: string | undefined;
    /**
     * The targets property
     */
    targets?: InvitationParticipantInfo[] | undefined;
    /**
     * The timeout property
     */
    timeout?: number | undefined;
}
