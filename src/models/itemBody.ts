import {BodyType} from './bodyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content of the item.
     */
    content?: string | undefined;
    /**
     * The type of the content. Possible values are text and html.
     */
    contentType?: BodyType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
