import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SearchAlterationOptions extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether spelling modifications are enabled. If enabled, the user will get the search results for the corrected query in case of no results for the original query with typos. The response will also include the spelling modification information in the queryAlterationResponse property. Optional.
     */
    enableModification?: boolean | undefined;
    /**
     * Indicates whether spelling suggestions are enabled. If enabled, the user will get the search results for the original search query and suggestions for spelling correction in the queryAlterationResponse property of the response for the typos in the query. Optional.
     */
    enableSuggestion?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
