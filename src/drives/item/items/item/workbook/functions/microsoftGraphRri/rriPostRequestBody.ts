import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RriPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _fv?: Json | undefined;
    private _nper?: Json | undefined;
    private _pv?: Json | undefined;
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
     * Instantiates a new rriPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fv property value. 
     * @returns a Json
     */
    public get fv() {
        return this._fv;
    };
    /**
     * Sets the fv property value. 
     * @param value Value to set for the fv property.
     */
    public set fv(value: Json | undefined) {
        this._fv = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fv": n => { this.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "nper": n => { this.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "pv": n => { this.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fv", this.fv);
        writer.writeObjectValue<Json>("nper", this.nper);
        writer.writeObjectValue<Json>("pv", this.pv);
        writer.writeAdditionalData(this.additionalData);
    };
}
