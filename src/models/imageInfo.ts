import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ImageInfo extends AdditionalDataHolder, Parsable {
    /**
     * Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization. For example – a high contrast image
     */
    addImageQuery?: boolean | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Optional; alt-text accessible content for the image
     */
    alternateText?: string | undefined;
    /**
     * The alternativeText property
     */
    alternativeText?: string | undefined;
    /**
     * Optional; URI that points to an icon which represents the application used to generate the activity
     */
    iconUrl?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
