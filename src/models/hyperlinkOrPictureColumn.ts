import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HyperlinkOrPictureColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Specifies whether the display format used for URL columns is an image or a hyperlink. */
    isPicture?: boolean | undefined;
}
