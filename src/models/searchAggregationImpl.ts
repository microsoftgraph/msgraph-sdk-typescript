import {createSearchBucketFromDiscriminatorValue} from './createSearchBucketFromDiscriminatorValue';
import {SearchBucketImpl} from './index';
import {SearchAggregation} from './searchAggregation';
import {SearchBucket} from './searchBucket';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAggregationImpl implements SearchAggregation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines the actual buckets of the computed aggregation. */
    private _buckets?: SearchBucket[] | undefined;
    /** Defines on which field the aggregation was computed on. */
    private _field?: string | undefined;
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
     * Gets the buckets property value. Defines the actual buckets of the computed aggregation.
     * @returns a SearchBucketInterface
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Defines the actual buckets of the computed aggregation.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: SearchBucket[] | undefined) {
        if(value) {
            const bucketsArrValue: SearchBucketImpl[] = [];
            this.buckets?.forEach(element => {
                bucketsArrValue.push((element instanceof SearchBucketImpl? element:new SearchBucketImpl(element)));
            });
            this._buckets = bucketsArrValue;
        }
    };
    /**
     * Instantiates a new searchAggregation and sets the default values.
     * @param searchAggregationParameterValue 
     */
    public constructor(searchAggregationParameterValue?: SearchAggregation | undefined) {
        this._additionalData = searchAggregationParameterValue?.additionalData ? searchAggregationParameterValue?.additionalData! : {};
        this._buckets = searchAggregationParameterValue?.buckets;
        this._field = searchAggregationParameterValue?.field;
    };
    /**
     * Gets the field property value. Defines on which field the aggregation was computed on.
     * @returns a string
     */
    public get field() {
        return this._field;
    };
    /**
     * Sets the field property value. Defines on which field the aggregation was computed on.
     * @param value Value to set for the field property.
     */
    public set field(value: string | undefined) {
        if(value) {
            this._field = value;
        }
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
        if(this.buckets && this.buckets.length != 0){        const bucketsArrValue: SearchBucketImpl[] = [];
        this.buckets?.forEach(element => {
            bucketsArrValue.push((element instanceof SearchBucketImpl? element:new SearchBucketImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SearchBucketImpl>("buckets", bucketsArrValue);
        }
        if(this.field){
            writer.writeStringValue("field", this.field);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
