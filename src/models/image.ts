import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Image extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Optional. Height of the image, in pixels. Read-only.
     */
    height?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Optional. Width of the image, in pixels. Read-only.
     */
    width?: number | undefined;
}
