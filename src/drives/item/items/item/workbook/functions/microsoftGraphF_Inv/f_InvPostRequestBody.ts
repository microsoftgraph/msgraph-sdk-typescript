import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class F_InvPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The degFreedom1 property */
    private _degFreedom1?: Json | undefined;
    /** The degFreedom2 property */
    private _degFreedom2?: Json | undefined;
    /** The probability property */
    private _probability?: Json | undefined;
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
     * Instantiates a new f_InvPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the degFreedom1 property value. The degFreedom1 property
     * @returns a Json
     */
    public get degFreedom1() {
        return this._degFreedom1;
    };
    /**
     * Sets the degFreedom1 property value. The degFreedom1 property
     * @param value Value to set for the degFreedom1 property.
     */
    public set degFreedom1(value: Json | undefined) {
        this._degFreedom1 = value;
    };
    /**
     * Gets the degFreedom2 property value. The degFreedom2 property
     * @returns a Json
     */
    public get degFreedom2() {
        return this._degFreedom2;
    };
    /**
     * Sets the degFreedom2 property value. The degFreedom2 property
     * @param value Value to set for the degFreedom2 property.
     */
    public set degFreedom2(value: Json | undefined) {
        this._degFreedom2 = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "degFreedom1": n => { this.degFreedom1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "degFreedom2": n => { this.degFreedom2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probability": n => { this.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
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
        writer.writeObjectValue<Json>("degFreedom1", this.degFreedom1);
        writer.writeObjectValue<Json>("degFreedom2", this.degFreedom2);
        writer.writeObjectValue<Json>("probability", this.probability);
        writer.writeAdditionalData(this.additionalData);
    };
}
