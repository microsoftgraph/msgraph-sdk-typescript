import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IspmtPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nper property */
    private _nper?: Json | undefined;
    /** The per property */
    private _per?: Json | undefined;
    /** The pv property */
    private _pv?: Json | undefined;
    /** The rate property */
    private _rate?: Json | undefined;
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
     * Instantiates a new ispmtPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "nper": n => { this.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "per": n => { this.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "pv": n => { this.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rate": n => { this.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the nper property value. The nper property
     * @returns a Json
     */
    public get nper() {
        return this._nper;
    };
    /**
     * Sets the nper property value. The nper property
     * @param value Value to set for the nper property.
     */
    public set nper(value: Json | undefined) {
        this._nper = value;
    };
    /**
     * Gets the per property value. The per property
     * @returns a Json
     */
    public get per() {
        return this._per;
    };
    /**
     * Sets the per property value. The per property
     * @param value Value to set for the per property.
     */
    public set per(value: Json | undefined) {
        this._per = value;
    };
    /**
     * Gets the pv property value. The pv property
     * @returns a Json
     */
    public get pv() {
        return this._pv;
    };
    /**
     * Sets the pv property value. The pv property
     * @param value Value to set for the pv property.
     */
    public set pv(value: Json | undefined) {
        this._pv = value;
    };
    /**
     * Gets the rate property value. The rate property
     * @returns a Json
     */
    public get rate() {
        return this._rate;
    };
    /**
     * Sets the rate property value. The rate property
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
        writer.writeObjectValue<Json>("nper", this.nper);
        writer.writeObjectValue<Json>("per", this.per);
        writer.writeObjectValue<Json>("pv", this.pv);
        writer.writeObjectValue<Json>("rate", this.rate);
        writer.writeAdditionalData(this.additionalData);
    };
}
