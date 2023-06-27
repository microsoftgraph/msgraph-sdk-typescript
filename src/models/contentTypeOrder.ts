import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeOrder extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether this is the default content type
     */
    defaultEscaped?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the position in which the content type appears in the selection UI.
     */
    position?: number | undefined;
}
