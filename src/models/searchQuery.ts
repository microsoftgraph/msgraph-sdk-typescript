import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchQuery extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The search query containing the search terms. Required.
     */
    queryString?: string | undefined;
    /**
     * Provides a way to decorate the query string. Supports both KQL and query variables. Optional.
     */
    queryTemplate?: string | undefined;
}
