import {BucketAggregationRange} from './bucketAggregationRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BucketAggregationRangeImpl implements AdditionalDataHolder, BucketAggregationRange, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the lower bound from which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required. */
    public from?: string | undefined;
    /** Defines the upper bound up to which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required. */
    public to?: string | undefined;
    /**
     * Instantiates a new bucketAggregationRange and sets the default values.
     * @param bucketAggregationRangeParameterValue 
     */
    public constructor(bucketAggregationRangeParameterValue?: BucketAggregationRange | undefined) {
        this.additionalData = bucketAggregationRangeParameterValue?.additionalData ? bucketAggregationRangeParameterValue?.additionalData! : {}
        this.from = bucketAggregationRangeParameterValue?.from ;
        this.to = bucketAggregationRangeParameterValue?.to ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "from": n => { this.from = n.getStringValue(); },
            "to": n => { this.to = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.from){
        writer.writeStringValue("from", this.from);
        }
        if(this.to){
        writer.writeStringValue("to", this.to);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
