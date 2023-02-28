import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VdbPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cost property */
    private _cost?: Json | undefined;
    /** The endPeriod property */
    private _endPeriod?: Json | undefined;
    /** The factor property */
    private _factor?: Json | undefined;
    /** The life property */
    private _life?: Json | undefined;
    /** The noSwitch property */
    private _noSwitch?: Json | undefined;
    /** The salvage property */
    private _salvage?: Json | undefined;
    /** The startPeriod property */
    private _startPeriod?: Json | undefined;
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
     * Instantiates a new vdbPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cost property value. The cost property
     * @returns a Json
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Sets the cost property value. The cost property
     * @param value Value to set for the cost property.
     */
    public set cost(value: Json | undefined) {
        this._cost = value;
    };
    /**
     * Gets the endPeriod property value. The endPeriod property
     * @returns a Json
     */
    public get endPeriod() {
        return this._endPeriod;
    };
    /**
     * Sets the endPeriod property value. The endPeriod property
     * @param value Value to set for the endPeriod property.
     */
    public set endPeriod(value: Json | undefined) {
        this._endPeriod = value;
    };
    /**
     * Gets the factor property value. The factor property
     * @returns a Json
     */
    public get factor() {
        return this._factor;
    };
    /**
     * Sets the factor property value. The factor property
     * @param value Value to set for the factor property.
     */
    public set factor(value: Json | undefined) {
        this._factor = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cost": n => { this.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "endPeriod": n => { this.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "factor": n => { this.factor = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "life": n => { this.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "noSwitch": n => { this.noSwitch = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "salvage": n => { this.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startPeriod": n => { this.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the life property value. The life property
     * @returns a Json
     */
    public get life() {
        return this._life;
    };
    /**
     * Sets the life property value. The life property
     * @param value Value to set for the life property.
     */
    public set life(value: Json | undefined) {
        this._life = value;
    };
    /**
     * Gets the noSwitch property value. The noSwitch property
     * @returns a Json
     */
    public get noSwitch() {
        return this._noSwitch;
    };
    /**
     * Sets the noSwitch property value. The noSwitch property
     * @param value Value to set for the noSwitch property.
     */
    public set noSwitch(value: Json | undefined) {
        this._noSwitch = value;
    };
    /**
     * Gets the salvage property value. The salvage property
     * @returns a Json
     */
    public get salvage() {
        return this._salvage;
    };
    /**
     * Sets the salvage property value. The salvage property
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
        writer.writeObjectValue<Json>("endPeriod", this.endPeriod);
        writer.writeObjectValue<Json>("factor", this.factor);
        writer.writeObjectValue<Json>("life", this.life);
        writer.writeObjectValue<Json>("noSwitch", this.noSwitch);
        writer.writeObjectValue<Json>("salvage", this.salvage);
        writer.writeObjectValue<Json>("startPeriod", this.startPeriod);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startPeriod property value. The startPeriod property
     * @returns a Json
     */
    public get startPeriod() {
        return this._startPeriod;
    };
    /**
     * Sets the startPeriod property value. The startPeriod property
     * @param value Value to set for the startPeriod property.
     */
    public set startPeriod(value: Json | undefined) {
        this._startPeriod = value;
    };
}
