import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AmorDegrcPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _basis?: Json | undefined;
    private _cost?: Json | undefined;
    private _datePurchased?: Json | undefined;
    private _firstPeriod?: Json | undefined;
    private _period?: Json | undefined;
    private _rate?: Json | undefined;
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
     * Gets the basis property value. 
     * @returns a Json
     */
    public get basis() {
        return this._basis;
    };
    /**
     * Sets the basis property value. 
     * @param value Value to set for the basis property.
     */
    public set basis(value: Json | undefined) {
        this._basis = value;
    };
    /**
     * Instantiates a new amorDegrcPostRequestBody and sets the default values.
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
     * Gets the datePurchased property value. 
     * @returns a Json
     */
    public get datePurchased() {
        return this._datePurchased;
    };
    /**
     * Sets the datePurchased property value. 
     * @param value Value to set for the datePurchased property.
     */
    public set datePurchased(value: Json | undefined) {
        this._datePurchased = value;
    };
    /**
     * Gets the firstPeriod property value. 
     * @returns a Json
     */
    public get firstPeriod() {
        return this._firstPeriod;
    };
    /**
     * Sets the firstPeriod property value. 
     * @param value Value to set for the firstPeriod property.
     */
    public set firstPeriod(value: Json | undefined) {
        this._firstPeriod = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "basis": n => { this.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "cost": n => { this.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "datePurchased": n => { this.datePurchased = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "firstPeriod": n => { this.firstPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "period": n => { this.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "salvage": n => { this.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
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
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("cost", this.cost);
        writer.writeObjectValue<Json>("datePurchased", this.datePurchased);
        writer.writeObjectValue<Json>("firstPeriod", this.firstPeriod);
        writer.writeObjectValue<Json>("period", this.period);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("salvage", this.salvage);
        writer.writeAdditionalData(this.additionalData);
    };
}
