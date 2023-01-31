import {KeyCredential, PasswordCredential} from '../../../models/';
import {createKeyCredentialFromDiscriminatorValue} from '../../../models/createKeyCredentialFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddKeyPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _keyCredential?: KeyCredential | undefined;
    private _passwordCredential?: PasswordCredential | undefined;
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
     * Instantiates a new addKeyPostRequestBody and sets the default values.
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
            "keyCredential": n => { this.keyCredential = n.getObjectValue<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
            "passwordCredential": n => { this.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
            "proof": n => { this.proof = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyCredential property value. 
     * @returns a keyCredential
     */
    public get keyCredential() {
        return this._keyCredential;
    };
    /**
     * Sets the keyCredential property value. 
     * @param value Value to set for the keyCredential property.
     */
    public set keyCredential(value: KeyCredential | undefined) {
        this._keyCredential = value;
    };
    /**
     * Gets the passwordCredential property value. 
     * @returns a passwordCredential
     */
    public get passwordCredential() {
        return this._passwordCredential;
    };
    /**
     * Sets the passwordCredential property value. 
     * @param value Value to set for the passwordCredential property.
     */
    public set passwordCredential(value: PasswordCredential | undefined) {
        this._passwordCredential = value;
    };
    /**
     * Gets the proof property value. 
     * @returns a string
     */
    public get proof() {
        return this._proof;
    };
    /**
     * Sets the proof property value. 
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
        writer.writeObjectValue<KeyCredential>("keyCredential", this.keyCredential);
        writer.writeObjectValue<PasswordCredential>("passwordCredential", this.passwordCredential);
        writer.writeStringValue("proof", this.proof);
        writer.writeAdditionalData(this.additionalData);
    };
}
