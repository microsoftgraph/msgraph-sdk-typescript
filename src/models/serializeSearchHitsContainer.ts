import {SearchAggregation} from './searchAggregation';
import {SearchHit} from './searchHit';
import {SearchHitsContainer} from './searchHitsContainer';
import {serializeSearchAggregation} from './serializeSearchAggregation';
import {serializeSearchHit} from './serializeSearchHit';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHitsContainer(writer: SerializationWriter, searchHitsContainer: SearchHitsContainer | undefined = {} as SearchHitsContainer) : void {
        writer.writeCollectionOfObjectValues<SearchAggregation>("aggregations", searchHitsContainer.aggregations, serializeSearchAggregation);
        writer.writeCollectionOfObjectValues<SearchHit>("hits", searchHitsContainer.hits, serializeSearchHit);
        writer.writeBooleanValue("moreResultsAvailable", searchHitsContainer.moreResultsAvailable);
        writer.writeStringValue("@odata.type", searchHitsContainer.odataType);
        writer.writeNumberValue("total", searchHitsContainer.total);
        writer.writeAdditionalData(searchHitsContainer.additionalData);
}
