import { type PresenceStatusMessage } from '../../../models/presenceStatusMessage';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SetStatusMessagePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The statusMessage property
     */
    statusMessage?: PresenceStatusMessage | undefined;
}
