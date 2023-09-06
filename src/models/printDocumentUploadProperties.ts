import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintDocumentUploadProperties extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The document's content (MIME) type.
     */
    contentType?: string | undefined;
    /**
     * The document's name.
     */
    documentName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The document's size in bytes.
     */
    size?: number | undefined;
}
