import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BucketAggregationRange implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines the lower bound from which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required. */
    private _from?: string | undefined;
    /** Defines the upper bound up to which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required. */
    private _to?: string | undefined;
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
     * Instantiates a new bucketAggregationRange and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the from property value. Defines the lower bound from which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required.
     * @returns a string
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. Defines the lower bound from which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required.
     * @param value Value to set for the from property.
     */
    public set from(value: string | undefined) {
        this._from = value;
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
        writer.writeStringValue("from", this.from);
        writer.writeStringValue("to", this.to);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the to property value. Defines the upper bound up to which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required.
     * @returns a string
     */
    public get to() {
        return this._to;
    };
    /**
     * Sets the to property value. Defines the upper bound up to which to compute the aggregation. This can be a numeric value or a string representation of a date using the YYYY-MM-DDTHH:mm:ss.sssZ format. Required.
     * @param value Value to set for the to property.
     */
    public set to(value: string | undefined) {
        this._to = value;
    };
}
