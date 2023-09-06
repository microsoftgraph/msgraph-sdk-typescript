import { type SynchronizationSecretKeyStringValuePair } from '../../../../models/synchronizationSecretKeyStringValuePair';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AcquireAccessTokenPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The credentials property
     */
    credentials?: SynchronizationSecretKeyStringValuePair[] | undefined;
}
