import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UploadClientCertificatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The password property
     */
    password?: string | undefined;
    /**
     * The pkcs12Value property
     */
    pkcs12Value?: string | undefined;
}
