import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Norm_InvPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The mean property */
    private _mean?: Json | undefined;
    /** The probability property */
    private _probability?: Json | undefined;
    /** The standardDev property */
    private _standardDev?: Json | undefined;
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
     * Instantiates a new norm_InvPostRequestBody and sets the default values.
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
            "mean": n => { this.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probability": n => { this.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "standardDev": n => { this.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mean property value. The mean property
     * @returns a Json
     */
    public get mean() {
        return this._mean;
    };
    /**
     * Sets the mean property value. The mean property
     * @param value Value to set for the mean property.
     */
    public set mean(value: Json | undefined) {
        this._mean = value;
    };
    /**
     * Gets the probability property value. The probability property
     * @returns a Json
     */
    public get probability() {
        return this._probability;
    };
    /**
     * Sets the probability property value. The probability property
     * @param value Value to set for the probability property.
     */
    public set probability(value: Json | undefined) {
        this._probability = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("mean", this.mean);
        writer.writeObjectValue<Json>("probability", this.probability);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the standardDev property value. The standardDev property
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
    };
    /**
     * Sets the standardDev property value. The standardDev property
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
}
