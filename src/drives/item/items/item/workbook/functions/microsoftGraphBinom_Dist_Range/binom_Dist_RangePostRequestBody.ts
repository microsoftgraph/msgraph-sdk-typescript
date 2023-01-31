import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Binom_Dist_RangePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _numberS?: Json | undefined;
    private _numberS2?: Json | undefined;
    private _probabilityS?: Json | undefined;
    private _trials?: Json | undefined;
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
     * Instantiates a new binom_Dist_RangePostRequestBody and sets the default values.
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
            "numberS": n => { this.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberS2": n => { this.numberS2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probabilityS": n => { this.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "trials": n => { this.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numberS property value. 
     * @returns a Json
     */
    public get numberS() {
        return this._numberS;
    };
    /**
     * Sets the numberS property value. 
     * @param value Value to set for the numberS property.
     */
    public set numberS(value: Json | undefined) {
        this._numberS = value;
    };
    /**
     * Gets the numberS2 property value. 
     * @returns a Json
     */
    public get numberS2() {
        return this._numberS2;
    };
    /**
     * Sets the numberS2 property value. 
     * @param value Value to set for the numberS2 property.
     */
    public set numberS2(value: Json | undefined) {
        this._numberS2 = value;
    };
    /**
     * Gets the probabilityS property value. 
     * @returns a Json
     */
    public get probabilityS() {
        return this._probabilityS;
    };
    /**
     * Sets the probabilityS property value. 
     * @param value Value to set for the probabilityS property.
     */
    public set probabilityS(value: Json | undefined) {
        this._probabilityS = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("numberS", this.numberS);
        writer.writeObjectValue<Json>("numberS2", this.numberS2);
        writer.writeObjectValue<Json>("probabilityS", this.probabilityS);
        writer.writeObjectValue<Json>("trials", this.trials);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trials property value. 
     * @returns a Json
     */
    public get trials() {
        return this._trials;
    };
    /**
     * Sets the trials property value. 
     * @param value Value to set for the trials property.
     */
    public set trials(value: Json | undefined) {
        this._trials = value;
    };
}
