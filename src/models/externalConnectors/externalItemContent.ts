import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItemContent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The type of content in the value property. Possible values are text and html. These are the content types that the indexer supports, and not the file extension types allowed. Required. */
    type?: ExternalItemContentType | undefined;
    /** The content for the externalItem. Required. */
    value?: string | undefined;
}
