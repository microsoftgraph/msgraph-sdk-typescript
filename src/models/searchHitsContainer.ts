import {createSearchAggregationFromDiscriminatorValue} from './createSearchAggregationFromDiscriminatorValue';
import {createSearchHitFromDiscriminatorValue} from './createSearchHitFromDiscriminatorValue';
import {SearchAggregation, SearchHit} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHitsContainer implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The aggregations property */
    private _aggregations?: SearchAggregation[] | undefined;
    /** A collection of the search results. */
    private _hits?: SearchHit[] | undefined;
    /** Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly. */
    private _moreResultsAvailable?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The total number of results. Note this is not the number of results on the page, but the total number of results satisfying the query. */
    private _total?: number | undefined;
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
     * Gets the aggregations property value. The aggregations property
     * @returns a searchAggregation
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Sets the aggregations property value. The aggregations property
     * @param value Value to set for the aggregations property.
     */
    public set aggregations(value: SearchAggregation[] | undefined) {
        this._aggregations = value;
    };
    /**
     * Instantiates a new searchHitsContainer and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aggregations": n => { this.aggregations = n.getCollectionOfObjectValues<SearchAggregation>(createSearchAggregationFromDiscriminatorValue); },
            "hits": n => { this.hits = n.getCollectionOfObjectValues<SearchHit>(createSearchHitFromDiscriminatorValue); },
            "moreResultsAvailable": n => { this.moreResultsAvailable = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hits property value. A collection of the search results.
     * @returns a searchHit
     */
    public get hits() {
        return this._hits;
    };
    /**
     * Sets the hits property value. A collection of the search results.
     * @param value Value to set for the hits property.
     */
    public set hits(value: SearchHit[] | undefined) {
        this._hits = value;
    };
    /**
     * Gets the moreResultsAvailable property value. Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly.
     * @returns a boolean
     */
    public get moreResultsAvailable() {
        return this._moreResultsAvailable;
    };
    /**
     * Sets the moreResultsAvailable property value. Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly.
     * @param value Value to set for the moreResultsAvailable property.
     */
    public set moreResultsAvailable(value: boolean | undefined) {
        this._moreResultsAvailable = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchAggregation>("aggregations", this.aggregations);
        writer.writeCollectionOfObjectValues<SearchHit>("hits", this.hits);
        writer.writeBooleanValue("moreResultsAvailable", this.moreResultsAvailable);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the total property value. The total number of results. Note this is not the number of results on the page, but the total number of results satisfying the query.
     * @returns a integer
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. The total number of results. Note this is not the number of results on the page, but the total number of results satisfying the query.
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
}
