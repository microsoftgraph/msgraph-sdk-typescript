import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CumIPmtPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _endPeriod?: Json | undefined;
    private _nper?: Json | undefined;
    private _pv?: Json | undefined;
    private _rate?: Json | undefined;
    private _startPeriod?: Json | undefined;
    private _type?: Json | undefined;
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
     * Instantiates a new cumIPmtPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endPeriod property value. 
     * @returns a Json
     */
    public get endPeriod() {
        return this._endPeriod;
    };
    /**
     * Sets the endPeriod property value. 
     * @param value Value to set for the endPeriod property.
     */
    public set endPeriod(value: Json | undefined) {
        this._endPeriod = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endPeriod": n => { this.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "nper": n => { this.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "pv": n => { this.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startPeriod": n => { this.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "type": n => { this.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the nper property value. 
     * @returns a Json
     */
    public get nper() {
        return this._nper;
    };
    /**
     * Sets the nper property value. 
     * @param value Value to set for the nper property.
     */
    public set nper(value: Json | undefined) {
        this._nper = value;
    };
    /**
     * Gets the pv property value. 
     * @returns a Json
     */
    public get pv() {
        return this._pv;
    };
    /**
     * Sets the pv property value. 
     * @param value Value to set for the pv property.
     */
    public set pv(value: Json | undefined) {
        this._pv = value;
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
        writer.writeObjectValue<Json>("endPeriod", this.endPeriod);
        writer.writeObjectValue<Json>("nper", this.nper);
        writer.writeObjectValue<Json>("pv", this.pv);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeObjectValue<Json>("startPeriod", this.startPeriod);
        writer.writeObjectValue<Json>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startPeriod property value. 
     * @returns a Json
     */
    public get startPeriod() {
        return this._startPeriod;
    };
    /**
     * Sets the startPeriod property value. 
     * @param value Value to set for the startPeriod property.
     */
    public set startPeriod(value: Json | undefined) {
        this._startPeriod = value;
    };
    /**
     * Gets the type property value. 
     * @returns a Json
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: Json | undefined) {
        this._type = value;
    };
}
