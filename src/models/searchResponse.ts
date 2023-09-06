import { type AlterationResponse } from './alterationResponse';
import { type ResultTemplateDictionary } from './resultTemplateDictionary';
import { type SearchHitsContainer } from './searchHitsContainer';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SearchResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A collection of search results.
     */
    hitsContainers?: SearchHitsContainer[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Provides information related to spelling corrections in the alteration response.
     */
    queryAlterationResponse?: AlterationResponse | undefined;
    /**
     * A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates.
     */
    resultTemplates?: ResultTemplateDictionary | undefined;
    /**
     * Contains the search terms sent in the initial search query.
     */
    searchTerms?: string[] | undefined;
}
