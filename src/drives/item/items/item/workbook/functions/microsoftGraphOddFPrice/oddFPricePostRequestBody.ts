import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OddFPricePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _basis?: Json | undefined;
    private _firstCoupon?: Json | undefined;
    private _frequency?: Json | undefined;
    private _issue?: Json | undefined;
    private _maturity?: Json | undefined;
    private _rate?: Json | undefined;
    private _redemption?: Json | undefined;
    private _settlement?: Json | undefined;
    private _yld?: Json | undefined;
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
     * Instantiates a new oddFPricePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the firstCoupon property value. 
     * @returns a Json
     */
    public get firstCoupon() {
        return this._firstCoupon;
    };
    /**
     * Sets the firstCoupon property value. 
     * @param value Value to set for the firstCoupon property.
     */
    public set firstCoupon(value: Json | undefined) {
        this._firstCoupon = value;
    };
    /**
     * Gets the frequency property value. 
     * @returns a Json
     */
    public get frequency() {
        return this._frequency;
    };
    /**
     * Sets the frequency property value. 
     * @param value Value to set for the frequency property.
     */
    public set frequency(value: Json | undefined) {
        this._frequency = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "basis": n => { this.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "firstCoupon": n => { this.firstCoupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "frequency": n => { this.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "issue": n => { this.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "maturity": n => { this.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "redemption": n => { this.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "settlement": n => { this.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "yld": n => { this.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the issue property value. 
     * @returns a Json
     */
    public get issue() {
        return this._issue;
    };
    /**
     * Sets the issue property value. 
     * @param value Value to set for the issue property.
     */
    public set issue(value: Json | undefined) {
        this._issue = value;
    };
    /**
     * Gets the maturity property value. 
     * @returns a Json
     */
    public get maturity() {
        return this._maturity;
    };
    /**
     * Sets the maturity property value. 
     * @param value Value to set for the maturity property.
     */
    public set maturity(value: Json | undefined) {
        this._maturity = value;
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
     * Gets the redemption property value. 
     * @returns a Json
     */
    public get redemption() {
        return this._redemption;
    };
    /**
     * Sets the redemption property value. 
     * @param value Value to set for the redemption property.
     */
    public set redemption(value: Json | undefined) {
        this._redemption = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("firstCoupon", this.firstCoupon);
        writer.writeObjectValue<Json>("frequency", this.frequency);
        writer.writeObjectValue<Json>("issue", this.issue);
        writer.writeObjectValue<Json>("maturity", this.maturity);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("redemption", this.redemption);
        writer.writeObjectValue<Json>("settlement", this.settlement);
        writer.writeObjectValue<Json>("yld", this.yld);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the settlement property value. 
     * @returns a Json
     */
    public get settlement() {
        return this._settlement;
    };
    /**
     * Sets the settlement property value. 
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
    /**
     * Gets the yld property value. 
     * @returns a Json
     */
    public get yld() {
        return this._yld;
    };
    /**
     * Sets the yld property value. 
     * @param value Value to set for the yld property.
     */
    public set yld(value: Json | undefined) {
        this._yld = value;
    };
}
