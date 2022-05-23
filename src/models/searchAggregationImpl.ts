import {createSearchBucketFromDiscriminatorValue} from './createSearchBucketFromDiscriminatorValue';
import {SearchBucketImpl} from './index';
import {SearchAggregation} from './searchAggregation';
import {SearchBucket} from './searchBucket';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAggregationImpl implements AdditionalDataHolder, Parsable, SearchAggregation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the actual buckets of the computed aggregation. */
    public buckets?: SearchBucket[] | undefined;
    /** Defines on which field the aggregation was computed on. */
    public field?: string | undefined;
    /**
     * Instantiates a new searchAggregation and sets the default values.
     * @param searchAggregationParameterValue 
     */
    public constructor(searchAggregationParameterValue?: SearchAggregation | undefined) {
        this.additionalData = searchAggregationParameterValue?.additionalData ? searchAggregationParameterValue?.additionalData! : {}
        this.buckets = searchAggregationParameterValue?.buckets ;
        this.field = searchAggregationParameterValue?.field ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<SearchBucketImpl>(createSearchBucketFromDiscriminatorValue); },
            "field": n => { this.field = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.buckets && this.buckets.length != 0){        const bucketsArrValue: SearchBucketImpl[] = []; this.buckets?.forEach(element => {bucketsArrValue.push(new SearchBucketImpl(element));});
        writer.writeCollectionOfObjectValues<SearchBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.field){
        writer.writeStringValue("field", this.field);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
