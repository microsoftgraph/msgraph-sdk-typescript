import {BuiltInIdentityProvider} from './builtInIdentityProvider';
import {IdentityProviderBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BuiltInIdentityProviderImpl extends IdentityProviderBaseImpl implements BuiltInIdentityProvider {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required. */
    public identityProviderType?: string | undefined;
    /**
     * Instantiates a new BuiltInIdentityProvider and sets the default values.
     * @param builtInIdentityProviderParameterValue 
     */
    public constructor(builtInIdentityProviderParameterValue?: BuiltInIdentityProvider | undefined) {
        super(builtInIdentityProviderParameterValue);
        this.additionalData = builtInIdentityProviderParameterValue?.additionalData ? builtInIdentityProviderParameterValue?.additionalData! : {};
        this.identityProviderType = builtInIdentityProviderParameterValue?.identityProviderType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "identityProviderType": n => { this.identityProviderType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.identityProviderType){
            writer.writeStringValue("identityProviderType", this.identityProviderType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
