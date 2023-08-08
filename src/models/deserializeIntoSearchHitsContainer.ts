import {createSearchAggregationFromDiscriminatorValue} from './createSearchAggregationFromDiscriminatorValue';
import {createSearchHitFromDiscriminatorValue} from './createSearchHitFromDiscriminatorValue';
import type {SearchAggregation} from './searchAggregation';
import type {SearchHit} from './searchHit';
import type {SearchHitsContainer} from './searchHitsContainer';
import {serializeSearchAggregation} from './serializeSearchAggregation';
import {serializeSearchHit} from './serializeSearchHit';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHitsContainer(searchHitsContainer: SearchHitsContainer | undefined = {} as SearchHitsContainer) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregations": n => { searchHitsContainer.aggregations = n.getCollectionOfObjectValues<SearchAggregation>(createSearchAggregationFromDiscriminatorValue); },
        "hits": n => { searchHitsContainer.hits = n.getCollectionOfObjectValues<SearchHit>(createSearchHitFromDiscriminatorValue); },
        "moreResultsAvailable": n => { searchHitsContainer.moreResultsAvailable = n.getBooleanValue(); },
        "@odata.type": n => { searchHitsContainer.odataType = n.getStringValue(); },
        "total": n => { searchHitsContainer.total = n.getNumberValue(); },
    }
}
