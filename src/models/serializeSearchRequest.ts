import {AggregationOption} from './aggregationOption';
import {CollapseProperty} from './collapseProperty';
import {EntityType} from './entityType';
import {ResultTemplateOption} from './resultTemplateOption';
import {SearchAlterationOptions} from './searchAlterationOptions';
import {SearchQuery} from './searchQuery';
import {SearchRequest} from './searchRequest';
import {serializeAggregationOption} from './serializeAggregationOption';
import {serializeCollapseProperty} from './serializeCollapseProperty';
import {serializeResultTemplateOption} from './serializeResultTemplateOption';
import {serializeSearchAlterationOptions} from './serializeSearchAlterationOptions';
import {serializeSearchQuery} from './serializeSearchQuery';
import {serializeSharePointOneDriveOptions} from './serializeSharePointOneDriveOptions';
import {serializeSortProperty} from './serializeSortProperty';
import {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import {SortProperty} from './sortProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchRequest(writer: SerializationWriter, searchRequest: SearchRequest | undefined = {} as SearchRequest) : void {
        writer.writeCollectionOfPrimitiveValues<string>("aggregationFilters", searchRequest.aggregationFilters);
        writer.writeCollectionOfObjectValues<AggregationOption>("aggregations", searchRequest.aggregations, serializeAggregationOption);
        writer.writeCollectionOfObjectValues<CollapseProperty>("collapseProperties", searchRequest.collapseProperties, serializeCollapseProperty);
        writer.writeCollectionOfPrimitiveValues<string>("contentSources", searchRequest.contentSources);
        writer.writeBooleanValue("enableTopResults", searchRequest.enableTopResults);
        if(searchRequest.entityTypes)
        writer.writeEnumValue<EntityType>("entityTypes", ...searchRequest.entityTypes);
        writer.writeCollectionOfPrimitiveValues<string>("fields", searchRequest.fields);
        writer.writeNumberValue("from", searchRequest.from);
        writer.writeStringValue("@odata.type", searchRequest.odataType);
        writer.writeObjectValue<SearchQuery>("query", searchRequest.query, serializeSearchQuery);
        writer.writeObjectValue<SearchAlterationOptions>("queryAlterationOptions", searchRequest.queryAlterationOptions, serializeSearchAlterationOptions);
        writer.writeStringValue("region", searchRequest.region);
        writer.writeObjectValue<ResultTemplateOption>("resultTemplateOptions", searchRequest.resultTemplateOptions, serializeResultTemplateOption);
        writer.writeObjectValue<SharePointOneDriveOptions>("sharePointOneDriveOptions", searchRequest.sharePointOneDriveOptions, serializeSharePointOneDriveOptions);
        writer.writeNumberValue("size", searchRequest.size);
        writer.writeCollectionOfObjectValues<SortProperty>("sortProperties", searchRequest.sortProperties, serializeSortProperty);
        writer.writeAdditionalData(searchRequest.additionalData);
}
