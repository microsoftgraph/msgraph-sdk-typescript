import {PasswordCredentialImpl} from '../../../models/';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {PasswordCredential} from '../../../models/passwordCredential';
import {PasswordCredentialPostRequestBody} from './passwordCredentialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addPassword method. */
export class PasswordCredentialPostRequestBodyImpl implements PasswordCredentialPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The passwordCredential property */
    private _passwordCredential?: PasswordCredential | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new PasswordCredentialPostRequestBody and sets the default values.
     * @param passwordCredentialPostRequestBodyParameterValue 
     */
    public constructor(passwordCredentialPostRequestBodyParameterValue?: PasswordCredentialPostRequestBody | undefined) {
        this._additionalData = passwordCredentialPostRequestBodyParameterValue?.additionalData ? passwordCredentialPostRequestBodyParameterValue?.additionalData! : {};
        this._passwordCredential = passwordCredentialPostRequestBodyParameterValue?.passwordCredential;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "passwordCredential": n => { this.passwordCredential = n.getObjectValue<PasswordCredentialImpl>(createPasswordCredentialFromDiscriminatorValue); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.passwordCredential){
            writer.writeObjectValue<PasswordCredentialImpl>("passwordCredential", (!this.passwordCredential || this.passwordCredential instanceof PasswordCredentialImpl? this.passwordCredential : new PasswordCredentialImpl(this.passwordCredential)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
