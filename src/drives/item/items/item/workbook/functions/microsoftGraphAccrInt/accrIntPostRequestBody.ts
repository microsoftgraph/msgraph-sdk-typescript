import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccrIntPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _basis?: Json | undefined;
    private _calcMethod?: Json | undefined;
    private _firstInterest?: Json | undefined;
    private _frequency?: Json | undefined;
    private _issue?: Json | undefined;
    private _par?: Json | undefined;
    private _rate?: Json | undefined;
    private _settlement?: Json | undefined;
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
     * Gets the calcMethod property value. 
     * @returns a Json
     */
    public get calcMethod() {
        return this._calcMethod;
    };
    /**
     * Sets the calcMethod property value. 
     * @param value Value to set for the calcMethod property.
     */
    public set calcMethod(value: Json | undefined) {
        this._calcMethod = value;
    };
    /**
     * Instantiates a new accrIntPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the firstInterest property value. 
     * @returns a Json
     */
    public get firstInterest() {
        return this._firstInterest;
    };
    /**
     * Sets the firstInterest property value. 
     * @param value Value to set for the firstInterest property.
     */
    public set firstInterest(value: Json | undefined) {
        this._firstInterest = value;
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
            "calcMethod": n => { this.calcMethod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "firstInterest": n => { this.firstInterest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "frequency": n => { this.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "issue": n => { this.issue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "par": n => { this.par = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "settlement": n => { this.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
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
     * Gets the par property value. 
     * @returns a Json
     */
    public get par() {
        return this._par;
    };
    /**
     * Sets the par property value. 
     * @param value Value to set for the par property.
     */
    public set par(value: Json | undefined) {
        this._par = value;
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
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("calcMethod", this.calcMethod);
        writer.writeObjectValue<Json>("firstInterest", this.firstInterest);
        writer.writeObjectValue<Json>("frequency", this.frequency);
        writer.writeObjectValue<Json>("issue", this.issue);
        writer.writeObjectValue<Json>("par", this.par);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("settlement", this.settlement);
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
}
