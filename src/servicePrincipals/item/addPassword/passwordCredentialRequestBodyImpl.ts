import {PasswordCredentialImpl} from '../../../models/';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {PasswordCredential} from '../../../models/passwordCredential';
import {PasswordCredentialRequestBody} from './passwordCredentialRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addPassword method. */
export class PasswordCredentialRequestBodyImpl implements AdditionalDataHolder, Parsable, PasswordCredentialRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The passwordCredential property */
    passwordCredential?: PasswordCredential | undefined;
    /**
     * Instantiates a new PasswordCredentialRequestBody and sets the default values.
     * @param passwordCredentialRequestBodyParameterValue 
     */
    public constructor(passwordCredentialRequestBodyParameterValue?: PasswordCredentialRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = passwordCredentialRequestBodyParameterValue?.additionalData ? {} : passwordCredentialRequestBodyParameterValue?.additionalData!
        this.passwordCredential = passwordCredentialRequestBodyParameterValue?.passwordCredential ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.passwordCredential){
        if(this.passwordCredential)
        writer.writeObjectValue<PasswordCredentialImpl>("passwordCredential", new PasswordCredentialImpl(this.passwordCredential));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
