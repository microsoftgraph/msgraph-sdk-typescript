import {createSearchAggregationFromDiscriminatorValue} from './createSearchAggregationFromDiscriminatorValue';
import {createSearchHitFromDiscriminatorValue} from './createSearchHitFromDiscriminatorValue';
import {SearchAggregationImpl, SearchHitImpl} from './index';
import {SearchAggregation} from './searchAggregation';
import {SearchHit} from './searchHit';
import {SearchHitsContainer} from './searchHitsContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHitsContainerImpl implements SearchHitsContainer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Contains the collection of aggregations computed based on the provided aggregationOption specified in the request. */
    private _aggregations?: SearchAggregation[] | undefined;
    /** A collection of the search results. */
    private _hits?: SearchHit[] | undefined;
    /** Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly. */
    private _moreResultsAvailable?: boolean | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the aggregations property value. Contains the collection of aggregations computed based on the provided aggregationOption specified in the request.
     * @returns a SearchAggregationInterface
     */
    public get aggregations() {
        return this._aggregations;
    };
    /**
     * Sets the aggregations property value. Contains the collection of aggregations computed based on the provided aggregationOption specified in the request.
     * @param value Value to set for the aggregations property.
     */
    public set aggregations(value: SearchAggregation[] | undefined) {
        if(value) {
            const aggregationsArrValue: SearchAggregationImpl[] = [];
            this.aggregations?.forEach(element => {
                aggregationsArrValue.push((element instanceof SearchAggregationImpl? element:new SearchAggregationImpl(element)));
            });
            this._aggregations = aggregationsArrValue;
        }
    };
    /**
     * Instantiates a new searchHitsContainer and sets the default values.
     * @param searchHitsContainerParameterValue 
     */
    public constructor(searchHitsContainerParameterValue?: SearchHitsContainer | undefined) {
        this._additionalData = searchHitsContainerParameterValue?.additionalData ? searchHitsContainerParameterValue?.additionalData! : {};
        this._aggregations = searchHitsContainerParameterValue?.aggregations;
        this._hits = searchHitsContainerParameterValue?.hits;
        this._moreResultsAvailable = searchHitsContainerParameterValue?.moreResultsAvailable;
        this._total = searchHitsContainerParameterValue?.total;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aggregations": n => { this.aggregations = n.getCollectionOfObjectValues<SearchAggregationImpl>(createSearchAggregationFromDiscriminatorValue); },
            "hits": n => { this.hits = n.getCollectionOfObjectValues<SearchHitImpl>(createSearchHitFromDiscriminatorValue); },
            "moreResultsAvailable": n => { this.moreResultsAvailable = n.getBooleanValue(); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hits property value. A collection of the search results.
     * @returns a SearchHitInterface
     */
    public get hits() {
        return this._hits;
    };
    /**
     * Sets the hits property value. A collection of the search results.
     * @param value Value to set for the hits property.
     */
    public set hits(value: SearchHit[] | undefined) {
        if(value) {
            const hitsArrValue: SearchHitImpl[] = [];
            this.hits?.forEach(element => {
                hitsArrValue.push((element instanceof SearchHitImpl? element:new SearchHitImpl(element)));
            });
            this._hits = hitsArrValue;
        }
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
        if(value) {
            this._moreResultsAvailable = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aggregations && this.aggregations.length != 0){        const aggregationsArrValue: SearchAggregationImpl[] = [];
        this.aggregations?.forEach(element => {
            aggregationsArrValue.push((element instanceof SearchAggregationImpl? element:new SearchAggregationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchAggregationImpl>("aggregations", aggregationsArrValue);
        }
        if(this.hits && this.hits.length != 0){        const hitsArrValue: SearchHitImpl[] = [];
        this.hits?.forEach(element => {
            hitsArrValue.push((element instanceof SearchHitImpl? element:new SearchHitImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchHitImpl>("hits", hitsArrValue);
        }
        if(this.moreResultsAvailable){
            writer.writeBooleanValue("moreResultsAvailable", this.moreResultsAvailable);
        }
        if(this.total){
            writer.writeNumberValue("total", this.total);
        }
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
        if(value) {
            this._total = value;
        }
    };
}
