import {createAggregationOptionFromDiscriminatorValue} from './createAggregationOptionFromDiscriminatorValue';
import {createResultTemplateOptionFromDiscriminatorValue} from './createResultTemplateOptionFromDiscriminatorValue';
import {createSearchAlterationOptionsFromDiscriminatorValue} from './createSearchAlterationOptionsFromDiscriminatorValue';
import {createSearchQueryFromDiscriminatorValue} from './createSearchQueryFromDiscriminatorValue';
import {createSortPropertyFromDiscriminatorValue} from './createSortPropertyFromDiscriminatorValue';
import {AggregationOption, ResultTemplateOption, SearchAlterationOptions, SearchQuery, SortProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses. */
    private _aggregationFilters?: string[] | undefined;
    /** Specifies aggregations (also known as refiners) to be returned alongside search results. Optional. */
    private _aggregations?: AggregationOption[] | undefined;
    /** Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional. */
    private _contentSources?: string[] | undefined;
    /** This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional. */
    private _enableTopResults?: boolean | undefined;
    /** One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required. */
    private _entityTypes?: string[] | undefined;
    /** Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional. */
    private _fields?: string[] | undefined;
    /** Specifies the offset for the search results. Offset 0 returns the very first result. Optional. */
    private _from?: number | undefined;
    /** The query property */
    private _query?: SearchQuery | undefined;
    /** Provides query alteration options formatted as a JSON blob that contains two optional flags related to spelling correction. Optional. */
    private _queryAlterationOptions?: SearchAlterationOptions | undefined;
    /** Provides the search result templates options for rendering connectors search results. */
    private _resultTemplateOptions?: ResultTemplateOption | undefined;
    /** The size of the page to be retrieved. Optional. */
    private _size?: number | undefined;
    /** Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional. */
    private _sortProperties?: SortProperty[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the aggregationFilters property value. Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.
     * @returns a string
     */
    public get aggregationFilters() {
        return this._aggregationFilters;
    };
    /**
     * Sets the aggregationFilters property value. Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.
     * @param value Value to set for the aggregationFilters property.
     */
    public set aggregationFilters(value: string[] | undefined) {
        this._aggregationFilters = value;
    };
    /**
     * Gets the aggregations property value. Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.
     * @returns a aggregationOption
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Sets the aggregations property value. Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.
     * @param value Value to set for the aggregations property.
     */
    public set aggregations(value: AggregationOption[] | undefined) {
        this._aggregations = value;
    };
    /**
     * Instantiates a new searchRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @returns a string
     */
    public get contentSources() {
        return this._contentSources;
    };
    /**
     * Sets the contentSources property value. Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where connectionid is the ConnectionId defined in the Connectors Administration.  Note: contentSource is only applicable when entityType=externalItem. Optional.
     * @param value Value to set for the contentSources property.
     */
    public set contentSources(value: string[] | undefined) {
        this._contentSources = value;
    };
    /**
     * Gets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @returns a boolean
     */
    public get enableTopResults() {
        return this._enableTopResults;
    };
    /**
     * Sets the enableTopResults property value. This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     * @param value Value to set for the enableTopResults property.
     */
    public set enableTopResults(value: boolean | undefined) {
        this._enableTopResults = value;
    };
    /**
     * Gets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @returns a string
     */
    public get entityTypes() {
        return this._entityTypes;
    };
    /**
     * Sets the entityTypes property value. One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event, drive, driveItem, person, externalItem. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     * @param value Value to set for the entityTypes property.
     */
    public set entityTypes(value: string[] | undefined) {
        this._entityTypes = value;
    };
    /**
     * Gets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @returns a string
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve it using the following syntax : label_title.Optional.
     * @param value Value to set for the fields property.
     */
    public set fields(value: string[] | undefined) {
        this._fields = value;
    };
    /**
     * Gets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @returns a integer
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     * @param value Value to set for the from property.
     */
    public set from(value: number | undefined) {
        this._from = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aggregationFilters": n => { this.aggregationFilters = n.getCollectionOfPrimitiveValues<string>(); },
            "aggregations": n => { this.aggregations = n.getCollectionOfObjectValues<AggregationOption>(createAggregationOptionFromDiscriminatorValue); },
            "contentSources": n => { this.contentSources = n.getCollectionOfPrimitiveValues<string>(); },
            "enableTopResults": n => { this.enableTopResults = n.getBooleanValue(); },
            "entityTypes": n => { this.entityTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "fields": n => { this.fields = n.getCollectionOfPrimitiveValues<string>(); },
            "from": n => { this.from = n.getNumberValue(); },
            "query": n => { this.query = n.getObjectValue<SearchQuery>(createSearchQueryFromDiscriminatorValue); },
            "queryAlterationOptions": n => { this.queryAlterationOptions = n.getObjectValue<SearchAlterationOptions>(createSearchAlterationOptionsFromDiscriminatorValue); },
            "resultTemplateOptions": n => { this.resultTemplateOptions = n.getObjectValue<ResultTemplateOption>(createResultTemplateOptionFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "sortProperties": n => { this.sortProperties = n.getCollectionOfObjectValues<SortProperty>(createSortPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the query property value. The query property
     * @returns a searchQuery
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. The query property
     * @param value Value to set for the query property.
     */
    public set query(value: SearchQuery | undefined) {
        this._query = value;
    };
    /**
     * Gets the queryAlterationOptions property value. Provides query alteration options formatted as a JSON blob that contains two optional flags related to spelling correction. Optional.
     * @returns a searchAlterationOptions
     */
    public get queryAlterationOptions() {
        return this._queryAlterationOptions;
    };
    /**
     * Sets the queryAlterationOptions property value. Provides query alteration options formatted as a JSON blob that contains two optional flags related to spelling correction. Optional.
     * @param value Value to set for the queryAlterationOptions property.
     */
    public set queryAlterationOptions(value: SearchAlterationOptions | undefined) {
        this._queryAlterationOptions = value;
    };
    /**
     * Gets the resultTemplateOptions property value. Provides the search result templates options for rendering connectors search results.
     * @returns a resultTemplateOption
     */
    public get resultTemplateOptions() {
        return this._resultTemplateOptions;
    };
    /**
     * Sets the resultTemplateOptions property value. Provides the search result templates options for rendering connectors search results.
     * @param value Value to set for the resultTemplateOptions property.
     */
    public set resultTemplateOptions(value: ResultTemplateOption | undefined) {
        this._resultTemplateOptions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("aggregationFilters", this.aggregationFilters);
        writer.writeCollectionOfObjectValues<AggregationOption>("aggregations", this.aggregations);
        writer.writeCollectionOfPrimitiveValues<string>("contentSources", this.contentSources);
        writer.writeBooleanValue("enableTopResults", this.enableTopResults);
        writer.writeCollectionOfPrimitiveValues<string>("entityTypes", this.entityTypes);
        writer.writeCollectionOfPrimitiveValues<string>("fields", this.fields);
        writer.writeNumberValue("from", this.from);
        writer.writeObjectValue<SearchQuery>("query", this.query);
        writer.writeObjectValue<SearchAlterationOptions>("queryAlterationOptions", this.queryAlterationOptions);
        writer.writeObjectValue<ResultTemplateOption>("resultTemplateOptions", this.resultTemplateOptions);
        writer.writeNumberValue("size", this.size);
        writer.writeCollectionOfObjectValues<SortProperty>("sortProperties", this.sortProperties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. The size of the page to be retrieved. Optional.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size of the page to be retrieved. Optional.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the sortProperties property value. Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.
     * @returns a sortProperty
     */
    public get sortProperties() {
        return this._sortProperties;
    };
    /**
     * Sets the sortProperties property value. Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.
     * @param value Value to set for the sortProperties property.
     */
    public set sortProperties(value: SortProperty[] | undefined) {
        this._sortProperties = value;
    };
}
