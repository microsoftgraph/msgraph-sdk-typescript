import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItemContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The type property
     */
    type?: ExternalItemContentType | undefined;
    /**
     * The content for the externalItem. Required.
     */
    value?: string | undefined;
}
