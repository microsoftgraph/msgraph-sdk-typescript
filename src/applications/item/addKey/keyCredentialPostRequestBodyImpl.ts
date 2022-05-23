import {KeyCredentialImpl, PasswordCredentialImpl} from '../../../models/';
import {createKeyCredentialFromDiscriminatorValue} from '../../../models/createKeyCredentialFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {KeyCredential} from '../../../models/keyCredential';
import {PasswordCredential} from '../../../models/passwordCredential';
import {KeyCredentialPostRequestBody} from './keyCredentialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addKey method. */
export class KeyCredentialPostRequestBodyImpl implements AdditionalDataHolder, KeyCredentialPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The keyCredential property */
    public keyCredential?: KeyCredential | undefined;
    /** The passwordCredential property */
    public passwordCredential?: PasswordCredential | undefined;
    /** The proof property */
    public proof?: string | undefined;
    /**
     * Instantiates a new KeyCredentialPostRequestBody and sets the default values.
     * @param keyCredentialPostRequestBodyParameterValue 
     */
    public constructor(keyCredentialPostRequestBodyParameterValue?: KeyCredentialPostRequestBody | undefined) {
        this.additionalData = keyCredentialPostRequestBodyParameterValue?.additionalData ? keyCredentialPostRequestBodyParameterValue?.additionalData! : {}
        this.keyCredential = keyCredentialPostRequestBodyParameterValue?.keyCredential ;
        this.passwordCredential = keyCredentialPostRequestBodyParameterValue?.passwordCredential ;
        this.proof = keyCredentialPostRequestBodyParameterValue?.proof ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.keyCredential){
        writer.writeObjectValue<KeyCredentialImpl>("keyCredential", new KeyCredentialImpl(this.keyCredential));
        }
        if(this.passwordCredential){
        writer.writeObjectValue<PasswordCredentialImpl>("passwordCredential", new PasswordCredentialImpl(this.passwordCredential));
        }
        if(this.proof){
        writer.writeStringValue("proof", this.proof);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
