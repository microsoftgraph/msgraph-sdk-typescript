import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DbPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _cost?: Json | undefined;
    private _life?: Json | undefined;
    private _month?: Json | undefined;
    private _period?: Json | undefined;
    private _salvage?: Json | undefined;
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
     * Instantiates a new dbPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cost property value. 
     * @returns a Json
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Sets the cost property value. 
     * @param value Value to set for the cost property.
     */
    public set cost(value: Json | undefined) {
        this._cost = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cost": n => { this.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "life": n => { this.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "month": n => { this.month = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "period": n => { this.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "salvage": n => { this.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the life property value. 
     * @returns a Json
     */
    public get life() {
        return this._life;
    };
    /**
     * Sets the life property value. 
     * @param value Value to set for the life property.
     */
    public set life(value: Json | undefined) {
        this._life = value;
    };
    /**
     * Gets the month property value. 
     * @returns a Json
     */
    public get month() {
        return this._month;
    };
    /**
     * Sets the month property value. 
     * @param value Value to set for the month property.
     */
    public set month(value: Json | undefined) {
        this._month = value;
    };
    /**
     * Gets the period property value. 
     * @returns a Json
     */
    public get period() {
        return this._period;
    };
    /**
     * Sets the period property value. 
     * @param value Value to set for the period property.
     */
    public set period(value: Json | undefined) {
        this._period = value;
    };
    /**
     * Gets the salvage property value. 
     * @returns a Json
     */
    public get salvage() {
        return this._salvage;
    };
    /**
     * Sets the salvage property value. 
     * @param value Value to set for the salvage property.
     */
    public set salvage(value: Json | undefined) {
        this._salvage = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cost", this.cost);
        writer.writeObjectValue<Json>("life", this.life);
        writer.writeObjectValue<Json>("month", this.month);
        writer.writeObjectValue<Json>("period", this.period);
        writer.writeObjectValue<Json>("salvage", this.salvage);
        writer.writeAdditionalData(this.additionalData);
    };
}
