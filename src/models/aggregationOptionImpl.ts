import {AggregationOption} from './aggregationOption';
import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {createBucketAggregationDefinitionFromDiscriminatorValue} from './createBucketAggregationDefinitionFromDiscriminatorValue';
import {BucketAggregationDefinitionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AggregationOptionImpl implements AdditionalDataHolder, AggregationOption, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The bucketDefinition property */
    bucketDefinition?: BucketAggregationDefinition | undefined;
    /** Computes aggregation on the field while the field exists in current entity type. Required. */
    field?: string | undefined;
    /** The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional. */
    size?: number | undefined;
    /**
     * Instantiates a new aggregationOption and sets the default values.
     * @param aggregationOptionParameterValue 
     */
    public constructor(aggregationOptionParameterValue?: AggregationOption | undefined) {
        this.additionalData = {};
        this.additionalData = aggregationOptionParameterValue?.additionalData ? {} : aggregationOptionParameterValue?.additionalData!
        this.bucketDefinition = aggregationOptionParameterValue?.bucketDefinition ;
        this.field = aggregationOptionParameterValue?.field ;
        this.size = aggregationOptionParameterValue?.size ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bucketDefinition": n => { this.bucketDefinition = n.getObjectValue<BucketAggregationDefinitionImpl>(createBucketAggregationDefinitionFromDiscriminatorValue); },
            "field": n => { this.field = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bucketDefinition){
        if(this.bucketDefinition)
        writer.writeObjectValue<BucketAggregationDefinitionImpl>("bucketDefinition", new BucketAggregationDefinitionImpl(this.bucketDefinition));
        }
        if(this.field){
        if(this.field)
        writer.writeStringValue("field", this.field);
        }
        if(this.size){
        if(this.size)
        writer.writeNumberValue("size", this.size);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
