import {createBucketAggregationDefinitionFromDiscriminatorValue} from './createBucketAggregationDefinitionFromDiscriminatorValue';
import {BucketAggregationDefinition} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AggregationOption implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The bucketDefinition property */
    private _bucketDefinition?: BucketAggregationDefinition | undefined;
    /** Computes aggregation on the field while the field exists in current entity type. Required. */
    private _field?: string | undefined;
    /** The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional. */
    private _size?: number | undefined;
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
     * Gets the bucketDefinition property value. The bucketDefinition property
     * @returns a bucketAggregationDefinition
     */
    public get bucketDefinition() {
        return this._bucketDefinition;
    };
    /**
     * Sets the bucketDefinition property value. The bucketDefinition property
     * @param value Value to set for the bucketDefinition property.
     */
    public set bucketDefinition(value: BucketAggregationDefinition | undefined) {
        this._bucketDefinition = value;
    };
    /**
     * Instantiates a new aggregationOption and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the field property value. Computes aggregation on the field while the field exists in current entity type. Required.
     * @returns a string
     */
    public get field() {
        return this._field;
    };
    /**
     * Sets the field property value. Computes aggregation on the field while the field exists in current entity type. Required.
     * @param value Value to set for the field property.
     */
    public set field(value: string | undefined) {
        this._field = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bucketDefinition": n => { this.bucketDefinition = n.getObjectValue<BucketAggregationDefinition>(createBucketAggregationDefinitionFromDiscriminatorValue); },
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
        writer.writeObjectValue<BucketAggregationDefinition>("bucketDefinition", this.bucketDefinition);
        writer.writeStringValue("field", this.field);
        writer.writeNumberValue("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
