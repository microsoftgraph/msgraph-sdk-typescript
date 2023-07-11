import {ContentFormat} from './contentFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FormattedContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content of this formattedContent.
     */
    content?: string | undefined;
    /**
     * The format of the content. The possible values are: text, html, markdown, unknownFutureValue.
     */
    format?: ContentFormat | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
