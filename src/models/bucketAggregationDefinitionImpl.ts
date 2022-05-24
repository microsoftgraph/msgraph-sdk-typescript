import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {createBucketAggregationRangeFromDiscriminatorValue} from './createBucketAggregationRangeFromDiscriminatorValue';
import {BucketAggregationRangeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BucketAggregationDefinitionImpl implements AdditionalDataHolder, BucketAggregationDefinition, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional. */
    public isDescending?: boolean | undefined;
    /** The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional. */
    public minimumCount?: number | undefined;
    /** A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional. */
    public prefixFilter?: string | undefined;
    /** Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional. */
    public ranges?: BucketAggregationRange[] | undefined;
    /** The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required. */
    public sortBy?: BucketAggregationSortProperty | undefined;
    /**
     * Instantiates a new bucketAggregationDefinition and sets the default values.
     * @param bucketAggregationDefinitionParameterValue 
     */
    public constructor(bucketAggregationDefinitionParameterValue?: BucketAggregationDefinition | undefined) {
        this.additionalData = bucketAggregationDefinitionParameterValue?.additionalData ? bucketAggregationDefinitionParameterValue?.additionalData! : {}
        this.isDescending = bucketAggregationDefinitionParameterValue?.isDescending ;
        this.minimumCount = bucketAggregationDefinitionParameterValue?.minimumCount ;
        this.prefixFilter = bucketAggregationDefinitionParameterValue?.prefixFilter ;
        this.ranges = bucketAggregationDefinitionParameterValue?.ranges ;
        this.sortBy = bucketAggregationDefinitionParameterValue?.sortBy ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDescending": n => { this.isDescending = n.getBooleanValue(); },
            "minimumCount": n => { this.minimumCount = n.getNumberValue(); },
            "prefixFilter": n => { this.prefixFilter = n.getStringValue(); },
            "ranges": n => { this.ranges = n.getCollectionOfObjectValues<BucketAggregationRangeImpl>(createBucketAggregationRangeFromDiscriminatorValue); },
            "sortBy": n => { this.sortBy = n.getEnumValue<BucketAggregationSortProperty>(BucketAggregationSortProperty); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDescending){
        writer.writeBooleanValue("isDescending", this.isDescending);
        }
        if(this.minimumCount){
        writer.writeNumberValue("minimumCount", this.minimumCount);
        }
        if(this.prefixFilter){
        writer.writeStringValue("prefixFilter", this.prefixFilter);
        }
        if(this.ranges && this.ranges.length != 0){        const rangesArrValue: BucketAggregationRangeImpl[] = []; this.ranges?.forEach(element => {rangesArrValue.push(new BucketAggregationRangeImpl(element));});
        writer.writeCollectionOfObjectValues<BucketAggregationRangeImpl>("ranges", rangesArrValue);
        }
        if(this.sortBy){
        writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", this.sortBy);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
