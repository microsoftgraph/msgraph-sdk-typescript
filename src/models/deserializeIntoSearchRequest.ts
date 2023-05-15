import {AggregationOption} from './aggregationOption';
import {createAggregationOptionFromDiscriminatorValue} from './createAggregationOptionFromDiscriminatorValue';
import {createResultTemplateOptionFromDiscriminatorValue} from './createResultTemplateOptionFromDiscriminatorValue';
import {createSearchAlterationOptionsFromDiscriminatorValue} from './createSearchAlterationOptionsFromDiscriminatorValue';
import {createSearchQueryFromDiscriminatorValue} from './createSearchQueryFromDiscriminatorValue';
import {createSharePointOneDriveOptionsFromDiscriminatorValue} from './createSharePointOneDriveOptionsFromDiscriminatorValue';
import {createSortPropertyFromDiscriminatorValue} from './createSortPropertyFromDiscriminatorValue';
import {EntityType} from './entityType';
import {ResultTemplateOption} from './resultTemplateOption';
import {SearchAlterationOptions} from './searchAlterationOptions';
import {SearchQuery} from './searchQuery';
import {SearchRequest} from './searchRequest';
import {serializeAggregationOption} from './serializeAggregationOption';
import {serializeResultTemplateOption} from './serializeResultTemplateOption';
import {serializeSearchAlterationOptions} from './serializeSearchAlterationOptions';
import {serializeSearchQuery} from './serializeSearchQuery';
import {serializeSharePointOneDriveOptions} from './serializeSharePointOneDriveOptions';
import {serializeSortProperty} from './serializeSortProperty';
import {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import {SortProperty} from './sortProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchRequest(searchRequest: SearchRequest | undefined = {} as SearchRequest) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationFilters": n => { searchRequest.aggregationFilters = n.getCollectionOfPrimitiveValues<string>(); },
        "aggregations": n => { searchRequest.aggregations = n.getCollectionOfObjectValues<AggregationOption>(createAggregationOptionFromDiscriminatorValue); },
        "contentSources": n => { searchRequest.contentSources = n.getCollectionOfPrimitiveValues<string>(); },
        "enableTopResults": n => { searchRequest.enableTopResults = n.getBooleanValue(); },
        "entityTypes": n => { searchRequest.entityTypes = n.getEnumValues<EntityType>(EntityType); },
        "fields": n => { searchRequest.fields = n.getCollectionOfPrimitiveValues<string>(); },
        "from": n => { searchRequest.from = n.getNumberValue(); },
        "@odata.type": n => { searchRequest.odataType = n.getStringValue(); },
        "query": n => { searchRequest.query = n.getObjectValue<SearchQuery>(createSearchQueryFromDiscriminatorValue); },
        "queryAlterationOptions": n => { searchRequest.queryAlterationOptions = n.getObjectValue<SearchAlterationOptions>(createSearchAlterationOptionsFromDiscriminatorValue); },
        "region": n => { searchRequest.region = n.getStringValue(); },
        "resultTemplateOptions": n => { searchRequest.resultTemplateOptions = n.getObjectValue<ResultTemplateOption>(createResultTemplateOptionFromDiscriminatorValue); },
        "sharePointOneDriveOptions": n => { searchRequest.sharePointOneDriveOptions = n.getObjectValue<SharePointOneDriveOptions>(createSharePointOneDriveOptionsFromDiscriminatorValue); },
        "size": n => { searchRequest.size = n.getNumberValue(); },
        "sortProperties": n => { searchRequest.sortProperties = n.getCollectionOfObjectValues<SortProperty>(createSortPropertyFromDiscriminatorValue); },
    }
}
