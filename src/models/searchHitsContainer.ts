import type {SearchAggregation} from './searchAggregation';
import type {SearchHit} from './searchHit';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchHitsContainer extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The aggregations property
     */
    aggregations?: SearchAggregation[] | undefined;
    /**
     * A collection of the search results.
     */
    hits?: SearchHit[] | undefined;
    /**
     * Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly.
     */
    moreResultsAvailable?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The total number of results. Note this is not the number of results on the page, but the total number of results satisfying the query.
     */
    total?: number | undefined;
}
