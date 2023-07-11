import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UrlToItemResolverBase extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The priority which defines the sequence in which the urlToItemResolverBase instances are evaluated.
     */
    priority?: number | undefined;
}
