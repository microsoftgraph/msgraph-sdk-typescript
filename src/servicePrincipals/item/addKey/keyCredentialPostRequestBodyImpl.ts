import {KeyCredentialImpl, PasswordCredentialImpl} from '../../../models/';
import {createKeyCredentialFromDiscriminatorValue} from '../../../models/createKeyCredentialFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {KeyCredential} from '../../../models/keyCredential';
import {PasswordCredential} from '../../../models/passwordCredential';
import {KeyCredentialPostRequestBody} from './keyCredentialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addKey method. */
export class KeyCredentialPostRequestBodyImpl implements KeyCredentialPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The keyCredential property */
    private _keyCredential?: KeyCredential | undefined;
    /** The passwordCredential property */
    private _passwordCredential?: PasswordCredential | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new KeyCredentialPostRequestBody and sets the default values.
     * @param keyCredentialPostRequestBodyParameterValue 
     */
    public constructor(keyCredentialPostRequestBodyParameterValue?: KeyCredentialPostRequestBody | undefined) {
        this._additionalData = keyCredentialPostRequestBodyParameterValue?.additionalData ? keyCredentialPostRequestBodyParameterValue?.additionalData! : {};
        this._keyCredential = keyCredentialPostRequestBodyParameterValue?.keyCredential;
        this._passwordCredential = keyCredentialPostRequestBodyParameterValue?.passwordCredential;
        this._proof = keyCredentialPostRequestBodyParameterValue?.proof;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "keyCredential": n => { this.keyCredential = n.getObjectValue<KeyCredentialImpl>(createKeyCredentialFromDiscriminatorValue); },
            "passwordCredential": n => { this.passwordCredential = n.getObjectValue<PasswordCredentialImpl>(createPasswordCredentialFromDiscriminatorValue); },
            "proof": n => { this.proof = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyCredential property value. The keyCredential property
     * @returns a KeyCredentialInterface
     */
    public get keyCredential() {
        return this._keyCredential;
    };
    /**
     * Sets the keyCredential property value. The keyCredential property
     * @param value Value to set for the keyCredential property.
     */
    public set keyCredential(value: KeyCredential | undefined) {
        if(value) {
            this._keyCredential = value instanceof KeyCredentialImpl? value : new KeyCredentialImpl(value);
        }
    };
    /**
     * Gets the passwordCredential property value. The passwordCredential property
     * @returns a PasswordCredentialInterface
     */
    public get passwordCredential() {
        return this._passwordCredential;
    };
    /**
     * Sets the passwordCredential property value. The passwordCredential property
     * @param value Value to set for the passwordCredential property.
     */
    public set passwordCredential(value: PasswordCredential | undefined) {
        if(value) {
            this._passwordCredential = value instanceof PasswordCredentialImpl? value : new PasswordCredentialImpl(value);
        }
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
        if(value) {
            this._proof = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.keyCredential){
            writer.writeObjectValue<KeyCredentialImpl>("keyCredential", (!this.keyCredential || this.keyCredential instanceof KeyCredentialImpl? this.keyCredential : new KeyCredentialImpl(this.keyCredential)));
        }
        if(this.passwordCredential){
            writer.writeObjectValue<PasswordCredentialImpl>("passwordCredential", (!this.passwordCredential || this.passwordCredential instanceof PasswordCredentialImpl? this.passwordCredential : new PasswordCredentialImpl(this.passwordCredential)));
        }
        if(this.proof){
            writer.writeStringValue("proof", this.proof);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
