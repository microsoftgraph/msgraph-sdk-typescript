import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MirrPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _financeRate?: Json | undefined;
    private _reinvestRate?: Json | undefined;
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
     * Instantiates a new mirrPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the financeRate property value. 
     * @returns a Json
     */
    public get financeRate() {
        return this._financeRate;
    };
    /**
     * Sets the financeRate property value. 
     * @param value Value to set for the financeRate property.
     */
    public set financeRate(value: Json | undefined) {
        this._financeRate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "financeRate": n => { this.financeRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "reinvestRate": n => { this.reinvestRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the reinvestRate property value. 
     * @returns a Json
     */
    public get reinvestRate() {
        return this._reinvestRate;
    };
    /**
     * Sets the reinvestRate property value. 
     * @param value Value to set for the reinvestRate property.
     */
    public set reinvestRate(value: Json | undefined) {
        this._reinvestRate = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("financeRate", this.financeRate);
        writer.writeObjectValue<Json>("reinvestRate", this.reinvestRate);
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
