import {BucketAggregationDefinition} from './bucketAggregationDefinition';
import {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {createBucketAggregationRangeFromDiscriminatorValue} from './createBucketAggregationRangeFromDiscriminatorValue';
import {BucketAggregationRangeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BucketAggregationDefinitionImpl implements BucketAggregationDefinition {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional. */
    private _isDescending?: boolean | undefined;
    /** The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional. */
    private _minimumCount?: number | undefined;
    /** A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional. */
    private _prefixFilter?: string | undefined;
    /** Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional. */
    private _ranges?: BucketAggregationRange[] | undefined;
    /** The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required. */
    private _sortBy?: BucketAggregationSortProperty | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new bucketAggregationDefinition and sets the default values.
     * @param bucketAggregationDefinitionParameterValue 
     */
    public constructor(bucketAggregationDefinitionParameterValue?: BucketAggregationDefinition | undefined) {
        this._additionalData = bucketAggregationDefinitionParameterValue?.additionalData ? bucketAggregationDefinitionParameterValue?.additionalData! : {};
        this._isDescending = bucketAggregationDefinitionParameterValue?.isDescending;
        this._minimumCount = bucketAggregationDefinitionParameterValue?.minimumCount;
        this._prefixFilter = bucketAggregationDefinitionParameterValue?.prefixFilter;
        this._ranges = bucketAggregationDefinitionParameterValue?.ranges;
        this._sortBy = bucketAggregationDefinitionParameterValue?.sortBy;
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
     * Gets the isDescending property value. True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional.
     * @returns a boolean
     */
    public get isDescending() {
        return this._isDescending;
    };
    /**
     * Sets the isDescending property value. True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional.
     * @param value Value to set for the isDescending property.
     */
    public set isDescending(value: boolean | undefined) {
        if(value) {
            this._isDescending = value;
        }
    };
    /**
     * Gets the minimumCount property value. The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional.
     * @returns a integer
     */
    public get minimumCount() {
        return this._minimumCount;
    };
    /**
     * Sets the minimumCount property value. The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional.
     * @param value Value to set for the minimumCount property.
     */
    public set minimumCount(value: number | undefined) {
        if(value) {
            this._minimumCount = value;
        }
    };
    /**
     * Gets the prefixFilter property value. A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional.
     * @returns a string
     */
    public get prefixFilter() {
        return this._prefixFilter;
    };
    /**
     * Sets the prefixFilter property value. A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional.
     * @param value Value to set for the prefixFilter property.
     */
    public set prefixFilter(value: string | undefined) {
        if(value) {
            this._prefixFilter = value;
        }
    };
    /**
     * Gets the ranges property value. Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional.
     * @returns a BucketAggregationRangeInterface
     */
    public get ranges() {
        return this._ranges;
    };
    /**
     * Sets the ranges property value. Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional.
     * @param value Value to set for the ranges property.
     */
    public set ranges(value: BucketAggregationRange[] | undefined) {
        if(value) {
            const rangesArrValue: BucketAggregationRangeImpl[] = [];
            this.ranges?.forEach(element => {
                rangesArrValue.push((element instanceof BucketAggregationRangeImpl? element:new BucketAggregationRangeImpl(element)));
            });
            this._ranges = rangesArrValue;
        }
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
        if(this.ranges && this.ranges.length != 0){        const rangesArrValue: BucketAggregationRangeImpl[] = [];
        this.ranges?.forEach(element => {
            rangesArrValue.push((element instanceof BucketAggregationRangeImpl? element:new BucketAggregationRangeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BucketAggregationRangeImpl>("ranges", rangesArrValue);
        }
        if(this.sortBy){
            writer.writeEnumValue<BucketAggregationSortProperty>("sortBy", this.sortBy);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sortBy property value. The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required.
     * @returns a bucketAggregationSortProperty
     */
    public get sortBy() {
        return this._sortBy;
    };
    /**
     * Sets the sortBy property value. The possible values are count to sort by the number of matches in the aggregation, keyAsStringto sort alphabeticaly based on the key in the aggregation, keyAsNumber for numerical sorting based on the key in the aggregation. Required.
     * @param value Value to set for the sortBy property.
     */
    public set sortBy(value: BucketAggregationSortProperty | undefined) {
        if(value) {
            this._sortBy = value;
        }
    };
}
