import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HypGeom_DistPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _cumulative?: Json | undefined;
    private _numberPop?: Json | undefined;
    private _numberSample?: Json | undefined;
    private _populationS?: Json | undefined;
    private _sampleS?: Json | undefined;
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
     * Instantiates a new hypGeom_DistPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cumulative property value. 
     * @returns a Json
     */
    public get cumulative() {
        return this._cumulative;
    };
    /**
     * Sets the cumulative property value. 
     * @param value Value to set for the cumulative property.
     */
    public set cumulative(value: Json | undefined) {
        this._cumulative = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cumulative": n => { this.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberPop": n => { this.numberPop = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberSample": n => { this.numberSample = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "populationS": n => { this.populationS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "sampleS": n => { this.sampleS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numberPop property value. 
     * @returns a Json
     */
    public get numberPop() {
        return this._numberPop;
    };
    /**
     * Sets the numberPop property value. 
     * @param value Value to set for the numberPop property.
     */
    public set numberPop(value: Json | undefined) {
        this._numberPop = value;
    };
    /**
     * Gets the numberSample property value. 
     * @returns a Json
     */
    public get numberSample() {
        return this._numberSample;
    };
    /**
     * Sets the numberSample property value. 
     * @param value Value to set for the numberSample property.
     */
    public set numberSample(value: Json | undefined) {
        this._numberSample = value;
    };
    /**
     * Gets the populationS property value. 
     * @returns a Json
     */
    public get populationS() {
        return this._populationS;
    };
    /**
     * Sets the populationS property value. 
     * @param value Value to set for the populationS property.
     */
    public set populationS(value: Json | undefined) {
        this._populationS = value;
    };
    /**
     * Gets the sampleS property value. 
     * @returns a Json
     */
    public get sampleS() {
        return this._sampleS;
    };
    /**
     * Sets the sampleS property value. 
     * @param value Value to set for the sampleS property.
     */
    public set sampleS(value: Json | undefined) {
        this._sampleS = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("numberPop", this.numberPop);
        writer.writeObjectValue<Json>("numberSample", this.numberSample);
        writer.writeObjectValue<Json>("populationS", this.populationS);
        writer.writeObjectValue<Json>("sampleS", this.sampleS);
        writer.writeAdditionalData(this.additionalData);
    };
}
