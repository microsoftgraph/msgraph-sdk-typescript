import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EffectPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nominalRate property */
    private _nominalRate?: Json | undefined;
    /** The npery property */
    private _npery?: Json | undefined;
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
     * Instantiates a new effectPostRequestBody and sets the default values.
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
            "nominalRate": n => { this.nominalRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "npery": n => { this.npery = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the nominalRate property value. The nominalRate property
     * @returns a Json
     */
    public get nominalRate() {
        return this._nominalRate;
    };
    /**
     * Sets the nominalRate property value. The nominalRate property
     * @param value Value to set for the nominalRate property.
     */
    public set nominalRate(value: Json | undefined) {
        this._nominalRate = value;
    };
    /**
     * Gets the npery property value. The npery property
     * @returns a Json
     */
    public get npery() {
        return this._npery;
    };
    /**
     * Sets the npery property value. The npery property
     * @param value Value to set for the npery property.
     */
    public set npery(value: Json | undefined) {
        this._npery = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("nominalRate", this.nominalRate);
        writer.writeObjectValue<Json>("npery", this.npery);
        writer.writeAdditionalData(this.additionalData);
    };
}
