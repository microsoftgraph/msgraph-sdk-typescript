import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class XnpvPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _dates?: Json | undefined;
    private _rate?: Json | undefined;
    private _values?: Json | undefined;
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
     * Instantiates a new xnpvPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dates property value. 
     * @returns a Json
     */
    public get dates() {
        return this._dates;
    };
    /**
     * Sets the dates property value. 
     * @param value Value to set for the dates property.
     */
    public set dates(value: Json | undefined) {
        this._dates = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dates": n => { this.dates = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the rate property value. 
     * @returns a Json
     */
    public get rate() {
        return this._rate;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: Json | undefined) {
        this._rate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("dates", this.dates);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("values", this.values);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the values property value. 
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. 
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
