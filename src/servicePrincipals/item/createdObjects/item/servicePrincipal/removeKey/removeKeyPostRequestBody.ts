import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeKey method. */
export class RemoveKeyPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The keyId property */
    private _keyId?: string | undefined;
    /** The proof property */
    private _proof?: string | undefined;
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
     * Instantiates a new removeKeyPostRequestBody and sets the default values.
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
            "keyId": n => { this.keyId = n.getStringValue(); },
            "proof": n => { this.proof = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyId property value. The keyId property
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. The keyId property
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Gets the proof property value. The proof property
     * @returns a string
     */
    public get proof() {
        return this._proof;
    };
    /**
     * Sets the proof property value. The proof property
     * @param value Value to set for the proof property.
     */
    public set proof(value: string | undefined) {
        this._proof = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("keyId", this.keyId);
        writer.writeStringValue("proof", this.proof);
        writer.writeAdditionalData(this.additionalData);
    };
}
