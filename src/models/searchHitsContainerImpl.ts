import {createSearchAggregationFromDiscriminatorValue} from './createSearchAggregationFromDiscriminatorValue';
import {createSearchHitFromDiscriminatorValue} from './createSearchHitFromDiscriminatorValue';
import {SearchAggregationImpl, SearchHitImpl} from './index';
import {SearchAggregation} from './searchAggregation';
import {SearchHit} from './searchHit';
import {SearchHitsContainer} from './searchHitsContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHitsContainerImpl implements AdditionalDataHolder, Parsable, SearchHitsContainer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Contains the collection of aggregations computed based on the provided aggregationOption specified in the request. */
    public aggregations?: SearchAggregation[] | undefined;
    /** A collection of the search results. */
    public hits?: SearchHit[] | undefined;
    /** Provides information if more results are available. Based on this information, you can adjust the from and size properties of the searchRequest accordingly. */
    public moreResultsAvailable?: boolean | undefined;
    /** The total number of results. Note this is not the number of results on the page, but the total number of results satisfying the query. */
    public total?: number | undefined;
    /**
     * Instantiates a new searchHitsContainer and sets the default values.
     * @param searchHitsContainerParameterValue 
     */
    public constructor(searchHitsContainerParameterValue?: SearchHitsContainer | undefined) {
        this.additionalData = searchHitsContainerParameterValue?.additionalData ? searchHitsContainerParameterValue?.additionalData! : {}
        this.aggregations = searchHitsContainerParameterValue?.aggregations ;
        this.hits = searchHitsContainerParameterValue?.hits ;
        this.moreResultsAvailable = searchHitsContainerParameterValue?.moreResultsAvailable ;
        this.total = searchHitsContainerParameterValue?.total ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aggregations && this.aggregations.length != 0){        const aggregationsArrValue: SearchAggregationImpl[] = []; this.aggregations?.forEach(element => {aggregationsArrValue.push(new SearchAggregationImpl(element));});
        writer.writeCollectionOfObjectValues<SearchAggregationImpl>("aggregations", aggregationsArrValue);
        }
        if(this.hits && this.hits.length != 0){        const hitsArrValue: SearchHitImpl[] = []; this.hits?.forEach(element => {hitsArrValue.push(new SearchHitImpl(element));});
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
}
