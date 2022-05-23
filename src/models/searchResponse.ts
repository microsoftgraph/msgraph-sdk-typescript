import {AlterationResponse} from './alterationResponse';
import {ResultTemplateDictionary} from './resultTemplateDictionary';
import {SearchHitsContainer} from './searchHitsContainer';

export interface SearchResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A collection of search results. */
    hitsContainers?:SearchHitsContainer[] | undefined;
    /** Provides details of query alteration response for spelling correction. */
    queryAlterationResponse?:AlterationResponse | undefined;
    /** A dictionary of resultTemplateIds and associated values, which include the name and JSON schema of the result templates. */
    resultTemplates?:ResultTemplateDictionary | undefined;
    /** Contains the search terms sent in the initial search query. */
    searchTerms?:string[] | undefined;
}
