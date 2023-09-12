import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AddTokenSigningCertificatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The endDateTime property
     */
    endDateTime?: Date | undefined;
}
