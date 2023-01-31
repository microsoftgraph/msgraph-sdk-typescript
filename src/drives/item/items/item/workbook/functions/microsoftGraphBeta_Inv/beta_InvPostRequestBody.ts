import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Beta_InvPostRequestBody implements AdditionalDataHolder, Parsable {
    private _a?: Json | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _alpha?: Json | undefined;
    private _b?: Json | undefined;
    private _beta?: Json | undefined;
    private _probability?: Json | undefined;
    /**
     * Gets the a property value. 
     * @returns a Json
     */
    public get a() {
        return this._a;
    };
    /**
     * Sets the a property value. 
     * @param value Value to set for the A property.
     */
    public set a(value: Json | undefined) {
        this._a = value;
    };
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
     * Gets the alpha property value. 
     * @returns a Json
     */
    public get alpha() {
        return this._alpha;
    };
    /**
     * Sets the alpha property value. 
     * @param value Value to set for the alpha property.
     */
    public set alpha(value: Json | undefined) {
        this._alpha = value;
    };
    /**
     * Gets the b property value. 
     * @returns a Json
     */
    public get b() {
        return this._b;
    };
    /**
     * Sets the b property value. 
     * @param value Value to set for the B property.
     */
    public set b(value: Json | undefined) {
        this._b = value;
    };
    /**
     * Gets the beta property value. 
     * @returns a Json
     */
    public get beta() {
        return this._beta;
    };
    /**
     * Sets the beta property value. 
     * @param value Value to set for the beta property.
     */
    public set beta(value: Json | undefined) {
        this._beta = value;
    };
    /**
     * Instantiates a new beta_InvPostRequestBody and sets the default values.
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
            "a": n => { this.a = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "alpha": n => { this.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "b": n => { this.b = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "beta": n => { this.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probability": n => { this.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the probability property value. 
     * @returns a Json
     */
    public get probability() {
        return this._probability;
    };
    /**
     * Sets the probability property value. 
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
        writer.writeObjectValue<Json>("a", this.a);
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("b", this.b);
        writer.writeObjectValue<Json>("beta", this.beta);
        writer.writeObjectValue<Json>("probability", this.probability);
        writer.writeAdditionalData(this.additionalData);
    };
}
