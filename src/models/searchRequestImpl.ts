import {AggregationOption} from './aggregationOption';
import {createAggregationOptionFromDiscriminatorValue} from './createAggregationOptionFromDiscriminatorValue';
import {createResultTemplateOptionFromDiscriminatorValue} from './createResultTemplateOptionFromDiscriminatorValue';
import {createSearchAlterationOptionsFromDiscriminatorValue} from './createSearchAlterationOptionsFromDiscriminatorValue';
import {createSearchQueryFromDiscriminatorValue} from './createSearchQueryFromDiscriminatorValue';
import {createSortPropertyFromDiscriminatorValue} from './createSortPropertyFromDiscriminatorValue';
import {AggregationOptionImpl, ResultTemplateOptionImpl, SearchAlterationOptionsImpl, SearchQueryImpl, SortPropertyImpl} from './index';
import {ResultTemplateOption} from './resultTemplateOption';
import {SearchAlterationOptions} from './searchAlterationOptions';
import {SearchQuery} from './searchQuery';
import {SearchRequest} from './searchRequest';
import {SortProperty} from './sortProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchRequestImpl implements AdditionalDataHolder, Parsable, SearchRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses. */
    public aggregationFilters?: string[] | undefined;
    /** Specifies aggregations (also known as refiners) to be returned alongside search results. Optional. */
    public aggregations?: AggregationOption[] | undefined;
    /** Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional. */
    public contentSources?: string[] | undefined;
    /** This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional. */
    public enableTopResults?: boolean | undefined;
    /** One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required. */
    public entityTypes?: string[] | undefined;
    /** Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional. */
    public fields?: string[] | undefined;
    /** Specifies the offset for the search results. Offset 0 returns the very first result. Optional. */
    public from?: number | undefined;
    /** The query property */
    public query?: SearchQuery | undefined;
    /** Provides query alteration options formatted as a JSON blob that contains two optional flags related to spelling correction. Optional. */
    public queryAlterationOptions?: SearchAlterationOptions | undefined;
    /** Provides the search result templates options for rendering connectors search results. */
    public resultTemplateOptions?: ResultTemplateOption | undefined;
    /** The size of the page to be retrieved. Optional. */
    public size?: number | undefined;
    /** Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional. */
    public sortProperties?: SortProperty[] | undefined;
    /**
     * Instantiates a new searchRequest and sets the default values.
     * @param searchRequestParameterValue 
     */
    public constructor(searchRequestParameterValue?: SearchRequest | undefined) {
        this.additionalData = searchRequestParameterValue?.additionalData ? searchRequestParameterValue?.additionalData! : {}
        this.aggregationFilters = searchRequestParameterValue?.aggregationFilters ;
        this.aggregations = searchRequestParameterValue?.aggregations ;
        this.contentSources = searchRequestParameterValue?.contentSources ;
        this.enableTopResults = searchRequestParameterValue?.enableTopResults ;
        this.entityTypes = searchRequestParameterValue?.entityTypes ;
        this.fields = searchRequestParameterValue?.fields ;
        this.from = searchRequestParameterValue?.from ;
        this.query = searchRequestParameterValue?.query ;
        this.queryAlterationOptions = searchRequestParameterValue?.queryAlterationOptions ;
        this.resultTemplateOptions = searchRequestParameterValue?.resultTemplateOptions ;
        this.size = searchRequestParameterValue?.size ;
        this.sortProperties = searchRequestParameterValue?.sortProperties ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aggregationFilters": n => { this.aggregationFilters = n.getCollectionOfPrimitiveValues<string>(); },
            "aggregations": n => { this.aggregations = n.getCollectionOfObjectValues<AggregationOptionImpl>(createAggregationOptionFromDiscriminatorValue); },
            "contentSources": n => { this.contentSources = n.getCollectionOfPrimitiveValues<string>(); },
            "enableTopResults": n => { this.enableTopResults = n.getBooleanValue(); },
            "entityTypes": n => { this.entityTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "fields": n => { this.fields = n.getCollectionOfPrimitiveValues<string>(); },
            "from": n => { this.from = n.getNumberValue(); },
            "query": n => { this.query = n.getObjectValue<SearchQueryImpl>(createSearchQueryFromDiscriminatorValue); },
            "queryAlterationOptions": n => { this.queryAlterationOptions = n.getObjectValue<SearchAlterationOptionsImpl>(createSearchAlterationOptionsFromDiscriminatorValue); },
            "resultTemplateOptions": n => { this.resultTemplateOptions = n.getObjectValue<ResultTemplateOptionImpl>(createResultTemplateOptionFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "sortProperties": n => { this.sortProperties = n.getCollectionOfObjectValues<SortPropertyImpl>(createSortPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aggregationFilters){
        writer.writeCollectionOfPrimitiveValues<string>("aggregationFilters", this.aggregationFilters);
        }
        if(this.aggregations && this.aggregations.length != 0){        const aggregationsArrValue: AggregationOptionImpl[] = []; this.aggregations?.forEach(element => {aggregationsArrValue.push(new AggregationOptionImpl(element));});
        writer.writeCollectionOfObjectValues<AggregationOptionImpl>("aggregations", aggregationsArrValue);
        }
        if(this.contentSources){
        writer.writeCollectionOfPrimitiveValues<string>("contentSources", this.contentSources);
        }
        if(this.enableTopResults){
        writer.writeBooleanValue("enableTopResults", this.enableTopResults);
        }
        if(this.entityTypes){
        writer.writeCollectionOfPrimitiveValues<string>("entityTypes", this.entityTypes);
        }
        if(this.fields){
        writer.writeCollectionOfPrimitiveValues<string>("fields", this.fields);
        }
        if(this.from){
        writer.writeNumberValue("from", this.from);
        }
        if(this.query){
        writer.writeObjectValue<SearchQueryImpl>("query", new SearchQueryImpl(this.query));
        }
        if(this.queryAlterationOptions){
        writer.writeObjectValue<SearchAlterationOptionsImpl>("queryAlterationOptions", new SearchAlterationOptionsImpl(this.queryAlterationOptions));
        }
        if(this.resultTemplateOptions){
        writer.writeObjectValue<ResultTemplateOptionImpl>("resultTemplateOptions", new ResultTemplateOptionImpl(this.resultTemplateOptions));
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
        if(this.sortProperties && this.sortProperties.length != 0){        const sortPropertiesArrValue: SortPropertyImpl[] = []; this.sortProperties?.forEach(element => {sortPropertiesArrValue.push(new SortPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SortPropertyImpl>("sortProperties", sortPropertiesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
