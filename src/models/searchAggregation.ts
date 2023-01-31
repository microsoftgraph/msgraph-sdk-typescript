import {createSearchBucketFromDiscriminatorValue} from './createSearchBucketFromDiscriminatorValue';
import {SearchBucket} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAggregation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _buckets?: SearchBucket[] | undefined;
    private _field?: string | undefined;
    private _odataType?: string | undefined;
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
     * Gets the buckets property value. 
     * @returns a searchBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. 
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: SearchBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Instantiates a new searchAggregation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the field property value. 
     * @returns a string
     */
    public get field() {
        return this._field;
    };
    /**
     * Sets the field property value. 
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
            "buckets": n => { this.buckets = n.getCollectionOfObjectValues<SearchBucket>(createSearchBucketFromDiscriminatorValue); },
            "field": n => { this.field = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeCollectionOfObjectValues<SearchBucket>("buckets", this.buckets);
        writer.writeStringValue("field", this.field);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
