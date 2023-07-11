import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface OcrSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether or not OCR is enabled for the case.
     */
    isEnabled?: boolean | undefined;
    /**
     * Maximum image size that will be processed in KB).
     */
    maxImageSize?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The timeout duration for the OCR engine. A longer timeout might increase success of OCR, but might add to the total processing time.
     */
    timeout?: Duration | undefined;
}
