import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HyperlinkOrPictureColumn extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies whether the display format used for URL columns is an image or a hyperlink.
     */
    isPicture?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
