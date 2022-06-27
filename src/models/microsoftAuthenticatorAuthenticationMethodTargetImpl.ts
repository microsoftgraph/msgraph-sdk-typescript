import {AuthenticationMethodTargetImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodTargetImpl extends AuthenticationMethodTargetImpl implements MicrosoftAuthenticatorAuthenticationMethodTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any. */
    public authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodTarget and sets the default values.
     * @param microsoftAuthenticatorAuthenticationMethodTargetParameterValue 
     */
    public constructor(microsoftAuthenticatorAuthenticationMethodTargetParameterValue?: MicrosoftAuthenticatorAuthenticationMethodTarget | undefined) {
        super(microsoftAuthenticatorAuthenticationMethodTargetParameterValue);
        this.additionalData = microsoftAuthenticatorAuthenticationMethodTargetParameterValue?.additionalData ? microsoftAuthenticatorAuthenticationMethodTargetParameterValue?.additionalData! : {};
        this.authenticationMode = microsoftAuthenticatorAuthenticationMethodTargetParameterValue?.authenticationMode;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationMode": n => { this.authenticationMode = n.getEnumValue<MicrosoftAuthenticatorAuthenticationMode>(MicrosoftAuthenticatorAuthenticationMode); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.authenticationMode){
            writer.writeEnumValue<MicrosoftAuthenticatorAuthenticationMode>("authenticationMode", this.authenticationMode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
