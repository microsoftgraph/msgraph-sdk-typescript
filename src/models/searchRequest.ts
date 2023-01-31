import {createAggregationOptionFromDiscriminatorValue} from './createAggregationOptionFromDiscriminatorValue';
import {createResultTemplateOptionFromDiscriminatorValue} from './createResultTemplateOptionFromDiscriminatorValue';
import {createSearchAlterationOptionsFromDiscriminatorValue} from './createSearchAlterationOptionsFromDiscriminatorValue';
import {createSearchQueryFromDiscriminatorValue} from './createSearchQueryFromDiscriminatorValue';
import {createSortPropertyFromDiscriminatorValue} from './createSortPropertyFromDiscriminatorValue';
import {EntityType} from './entityType';
import {AggregationOption, ResultTemplateOption, SearchAlterationOptions, SearchQuery, SortProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _aggregationFilters?: string[] | undefined;
    private _aggregations?: AggregationOption[] | undefined;
    private _contentSources?: string[] | undefined;
    private _enableTopResults?: boolean | undefined;
    private _entityTypes?: EntityType[] | undefined;
    private _fields?: string[] | undefined;
    private _from?: number | undefined;
    private _odataType?: string | undefined;
    private _query?: SearchQuery | undefined;
    private _queryAlterationOptions?: SearchAlterationOptions | undefined;
    private _resultTemplateOptions?: ResultTemplateOption | undefined;
    private _size?: number | undefined;
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
     * Gets the aggregationFilters property value. 
     * @returns a string
     */
    public get aggregationFilters() {
        return this._aggregationFilters;
    };
    /**
     * Sets the aggregationFilters property value. 
     * @param value Value to set for the aggregationFilters property.
     */
    public set aggregationFilters(value: string[] | undefined) {
        this._aggregationFilters = value;
    };
    /**
     * Gets the aggregations property value. 
     * @returns a aggregationOption
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Sets the aggregations property value. 
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
     * Gets the contentSources property value. 
     * @returns a string
     */
    public get contentSources() {
        return this._contentSources;
    };
    /**
     * Sets the contentSources property value. 
     * @param value Value to set for the contentSources property.
     */
    public set contentSources(value: string[] | undefined) {
        this._contentSources = value;
    };
    /**
     * Gets the enableTopResults property value. 
     * @returns a boolean
     */
    public get enableTopResults() {
        return this._enableTopResults;
    };
    /**
     * Sets the enableTopResults property value. 
     * @param value Value to set for the enableTopResults property.
     */
    public set enableTopResults(value: boolean | undefined) {
        this._enableTopResults = value;
    };
    /**
     * Gets the entityTypes property value. 
     * @returns a entityType
     */
    public get entityTypes() {
        return this._entityTypes;
    };
    /**
     * Sets the entityTypes property value. 
     * @param value Value to set for the entityTypes property.
     */
    public set entityTypes(value: EntityType[] | undefined) {
        this._entityTypes = value;
    };
    /**
     * Gets the fields property value. 
     * @returns a string
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. 
     * @param value Value to set for the fields property.
     */
    public set fields(value: string[] | undefined) {
        this._fields = value;
    };
    /**
     * Gets the from property value. 
     * @returns a integer
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. 
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
            "entityTypes": n => { this.entityTypes = n.getEnumValues<EntityType>(EntityType); },
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
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the query property value. 
     * @returns a searchQuery
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. 
     * @param value Value to set for the query property.
     */
    public set query(value: SearchQuery | undefined) {
        this._query = value;
    };
    /**
     * Gets the queryAlterationOptions property value. 
     * @returns a searchAlterationOptions
     */
    public get queryAlterationOptions() {
        return this._queryAlterationOptions;
    };
    /**
     * Sets the queryAlterationOptions property value. 
     * @param value Value to set for the queryAlterationOptions property.
     */
    public set queryAlterationOptions(value: SearchAlterationOptions | undefined) {
        this._queryAlterationOptions = value;
    };
    /**
     * Gets the resultTemplateOptions property value. 
     * @returns a resultTemplateOption
     */
    public get resultTemplateOptions() {
        return this._resultTemplateOptions;
    };
    /**
     * Sets the resultTemplateOptions property value. 
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
        this.entityTypes && writer.writeEnumValue<EntityType>("entityTypes", ...this.entityTypes);
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
     * Gets the size property value. 
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. 
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the sortProperties property value. 
     * @returns a sortProperty
     */
    public get sortProperties() {
        return this._sortProperties;
    };
    /**
     * Sets the sortProperties property value. 
     * @param value Value to set for the sortProperties property.
     */
    public set sortProperties(value: SortProperty[] | undefined) {
        this._sortProperties = value;
    };
}
