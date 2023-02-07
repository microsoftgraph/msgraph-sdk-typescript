import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Binom_InvPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The alpha property */
    private _alpha?: Json | undefined;
    /** The probabilityS property */
    private _probabilityS?: Json | undefined;
    /** The trials property */
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
     * Gets the alpha property value. The alpha property
     * @returns a Json
     */
    public get alpha() {
        return this._alpha;
    };
    /**
     * Sets the alpha property value. The alpha property
     * @param value Value to set for the alpha property.
     */
    public set alpha(value: Json | undefined) {
        this._alpha = value;
    };
    /**
     * Instantiates a new binom_InvPostRequestBody and sets the default values.
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
            "alpha": n => { this.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probabilityS": n => { this.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "trials": n => { this.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the probabilityS property value. The probabilityS property
     * @returns a Json
     */
    public get probabilityS() {
        return this._probabilityS;
    };
    /**
     * Sets the probabilityS property value. The probabilityS property
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
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("probabilityS", this.probabilityS);
        writer.writeObjectValue<Json>("trials", this.trials);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trials property value. The trials property
     * @returns a Json
     */
    public get trials() {
        return this._trials;
    };
    /**
     * Sets the trials property value. The trials property
     * @param value Value to set for the trials property.
     */
    public set trials(value: Json | undefined) {
        this._trials = value;
    };
}
