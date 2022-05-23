import {PasswordProfile} from './passwordProfile';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordProfileImpl implements AdditionalDataHolder, Parsable, PasswordProfile {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** true if the user must change her password on the next login; otherwise false. If not set, default is false. NOTE:  For Azure B2C tenants, set to false and instead use custom policies and user flows to force password reset at first sign in. See Force password reset at first logon. */
    public forceChangePasswordNextSignIn?: boolean | undefined;
    /** If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false. */
    public forceChangePasswordNextSignInWithMfa?: boolean | undefined;
    /** The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required. */
    public password?: string | undefined;
    /**
     * Instantiates a new passwordProfile and sets the default values.
     * @param passwordProfileParameterValue 
     */
    public constructor(passwordProfileParameterValue?: PasswordProfile | undefined) {
        this.additionalData = passwordProfileParameterValue?.additionalData ? passwordProfileParameterValue?.additionalData! : {}
        this.forceChangePasswordNextSignIn = passwordProfileParameterValue?.forceChangePasswordNextSignIn ;
        this.forceChangePasswordNextSignInWithMfa = passwordProfileParameterValue?.forceChangePasswordNextSignInWithMfa ;
        this.password = passwordProfileParameterValue?.password ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "forceChangePasswordNextSignIn": n => { this.forceChangePasswordNextSignIn = n.getBooleanValue(); },
            "forceChangePasswordNextSignInWithMfa": n => { this.forceChangePasswordNextSignInWithMfa = n.getBooleanValue(); },
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.forceChangePasswordNextSignIn){
        writer.writeBooleanValue("forceChangePasswordNextSignIn", this.forceChangePasswordNextSignIn);
        }
        if(this.forceChangePasswordNextSignInWithMfa){
        writer.writeBooleanValue("forceChangePasswordNextSignInWithMfa", this.forceChangePasswordNextSignInWithMfa);
        }
        if(this.password){
        writer.writeStringValue("password", this.password);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
