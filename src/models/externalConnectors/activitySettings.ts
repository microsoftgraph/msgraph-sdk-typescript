import {UrlToItemResolverBase} from './urlToItemResolverBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ActivitySettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies configurations to identify an externalItem based on a shared URL.
     */
    urlToItemResolvers?: UrlToItemResolverBase[] | undefined;
}
