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
    /** The aggregationFilters property */
    private _aggregationFilters?: string[] | undefined;
    /** The aggregations property */
    private _aggregations?: AggregationOption[] | undefined;
    /** The contentSources property */
    private _contentSources?: string[] | undefined;
    /** The enableTopResults property */
    private _enableTopResults?: boolean | undefined;
    /** The entityTypes property */
    private _entityTypes?: string[] | undefined;
    /** The fields property */
    private _fields?: string[] | undefined;
    /** The from property */
    private _from?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The query property */
    private _query?: SearchQuery | undefined;
    /** The queryAlterationOptions property */
    private _queryAlterationOptions?: SearchAlterationOptions | undefined;
    /** The resultTemplateOptions property */
    private _resultTemplateOptions?: ResultTemplateOption | undefined;
    /** The size property */
    private _size?: number | undefined;
    /** The sortProperties property */
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
     * Gets the aggregationFilters property value. The aggregationFilters property
     * @returns a string
     */
    public get aggregationFilters() {
        return this._aggregationFilters;
    };
    /**
     * Sets the aggregationFilters property value. The aggregationFilters property
     * @param value Value to set for the aggregationFilters property.
     */
    public set aggregationFilters(value: string[] | undefined) {
        this._aggregationFilters = value;
    };
    /**
     * Gets the aggregations property value. The aggregations property
     * @returns a aggregationOption
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Sets the aggregations property value. The aggregations property
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
        this.odataType = "#microsoft.graph.searchRequest";
    };
    /**
     * Gets the contentSources property value. The contentSources property
     * @returns a string
     */
    public get contentSources() {
        return this._contentSources;
    };
    /**
     * Sets the contentSources property value. The contentSources property
     * @param value Value to set for the contentSources property.
     */
    public set contentSources(value: string[] | undefined) {
        this._contentSources = value;
    };
    /**
     * Gets the enableTopResults property value. The enableTopResults property
     * @returns a boolean
     */
    public get enableTopResults() {
        return this._enableTopResults;
    };
    /**
     * Sets the enableTopResults property value. The enableTopResults property
     * @param value Value to set for the enableTopResults property.
     */
    public set enableTopResults(value: boolean | undefined) {
        this._enableTopResults = value;
    };
    /**
     * Gets the entityTypes property value. The entityTypes property
     * @returns a string
     */
    public get entityTypes() {
        return this._entityTypes;
    };
    /**
     * Sets the entityTypes property value. The entityTypes property
     * @param value Value to set for the entityTypes property.
     */
    public set entityTypes(value: string[] | undefined) {
        this._entityTypes = value;
    };
    /**
     * Gets the fields property value. The fields property
     * @returns a string
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    public set fields(value: string[] | undefined) {
        this._fields = value;
    };
    /**
     * Gets the from property value. The from property
     * @returns a integer
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. The from property
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "query": n => { this.query = n.getObjectValue<SearchQuery>(createSearchQueryFromDiscriminatorValue); },
            "queryAlterationOptions": n => { this.queryAlterationOptions = n.getObjectValue<SearchAlterationOptions>(createSearchAlterationOptionsFromDiscriminatorValue); },
            "resultTemplateOptions": n => { this.resultTemplateOptions = n.getObjectValue<ResultTemplateOption>(createResultTemplateOptionFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "sortProperties": n => { this.sortProperties = n.getCollectionOfObjectValues<SortProperty>(createSortPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
     * Gets the queryAlterationOptions property value. The queryAlterationOptions property
     * @returns a searchAlterationOptions
     */
    public get queryAlterationOptions() {
        return this._queryAlterationOptions;
    };
    /**
     * Sets the queryAlterationOptions property value. The queryAlterationOptions property
     * @param value Value to set for the queryAlterationOptions property.
     */
    public set queryAlterationOptions(value: SearchAlterationOptions | undefined) {
        this._queryAlterationOptions = value;
    };
    /**
     * Gets the resultTemplateOptions property value. The resultTemplateOptions property
     * @returns a resultTemplateOption
     */
    public get resultTemplateOptions() {
        return this._resultTemplateOptions;
    };
    /**
     * Sets the resultTemplateOptions property value. The resultTemplateOptions property
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<SearchQuery>("query", this.query);
        writer.writeObjectValue<SearchAlterationOptions>("queryAlterationOptions", this.queryAlterationOptions);
        writer.writeObjectValue<ResultTemplateOption>("resultTemplateOptions", this.resultTemplateOptions);
        writer.writeNumberValue("size", this.size);
        writer.writeCollectionOfObjectValues<SortProperty>("sortProperties", this.sortProperties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. The size property
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size property
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the sortProperties property value. The sortProperties property
     * @returns a sortProperty
     */
    public get sortProperties() {
        return this._sortProperties;
    };
    /**
     * Sets the sortProperties property value. The sortProperties property
     * @param value Value to set for the sortProperties property.
     */
    public set sortProperties(value: SortProperty[] | undefined) {
        this._sortProperties = value;
    };
}
