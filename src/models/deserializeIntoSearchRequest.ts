import type {AggregationOption} from './aggregationOption';
import type {CollapseProperty} from './collapseProperty';
import {createAggregationOptionFromDiscriminatorValue} from './createAggregationOptionFromDiscriminatorValue';
import {createCollapsePropertyFromDiscriminatorValue} from './createCollapsePropertyFromDiscriminatorValue';
import {createResultTemplateOptionFromDiscriminatorValue} from './createResultTemplateOptionFromDiscriminatorValue';
import {createSearchAlterationOptionsFromDiscriminatorValue} from './createSearchAlterationOptionsFromDiscriminatorValue';
import {createSearchQueryFromDiscriminatorValue} from './createSearchQueryFromDiscriminatorValue';
import {createSharePointOneDriveOptionsFromDiscriminatorValue} from './createSharePointOneDriveOptionsFromDiscriminatorValue';
import {createSortPropertyFromDiscriminatorValue} from './createSortPropertyFromDiscriminatorValue';
import {EntityType} from './entityType';
import type {ResultTemplateOption} from './resultTemplateOption';
import type {SearchAlterationOptions} from './searchAlterationOptions';
import type {SearchQuery} from './searchQuery';
import type {SearchRequest} from './searchRequest';
import {serializeAggregationOption} from './serializeAggregationOption';
import {serializeCollapseProperty} from './serializeCollapseProperty';
import {serializeResultTemplateOption} from './serializeResultTemplateOption';
import {serializeSearchAlterationOptions} from './serializeSearchAlterationOptions';
import {serializeSearchQuery} from './serializeSearchQuery';
import {serializeSharePointOneDriveOptions} from './serializeSharePointOneDriveOptions';
import {serializeSortProperty} from './serializeSortProperty';
import type {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import type {SortProperty} from './sortProperty';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchRequest(searchRequest: SearchRequest | undefined = {} as SearchRequest) : Record<string, (node: ParseNode) => void> {
    return {
        "aggregationFilters": n => { searchRequest.aggregationFilters = n.getCollectionOfPrimitiveValues<string>(); },
        "aggregations": n => { searchRequest.aggregations = n.getCollectionOfObjectValues<AggregationOption>(createAggregationOptionFromDiscriminatorValue); },
        "collapseProperties": n => { searchRequest.collapseProperties = n.getCollectionOfObjectValues<CollapseProperty>(createCollapsePropertyFromDiscriminatorValue); },
        "contentSources": n => { searchRequest.contentSources = n.getCollectionOfPrimitiveValues<string>(); },
        "enableTopResults": n => { searchRequest.enableTopResults = n.getBooleanValue(); },
        "entityTypes": n => { searchRequest.entityTypes = n.getCollectionOfEnumValues<EntityType>(EntityType); },
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
