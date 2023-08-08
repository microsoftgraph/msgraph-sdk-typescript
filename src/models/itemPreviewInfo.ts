import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemPreviewInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The getUrl property
     */
    getUrl?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The postParameters property
     */
    postParameters?: string | undefined;
    /**
     * The postUrl property
     */
    postUrl?: string | undefined;
}
