import {AuthenticationMethodTarget} from './index';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget implements Parsable {
    /** Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any. */
    private _authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
    /**
     * Gets the authenticationMode property value. Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any.
     * @returns a microsoftAuthenticatorAuthenticationMode
     */
    public get authenticationMode() {
        return this._authenticationMode;
    };
    /**
     * Sets the authenticationMode property value. Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any.
     * @param value Value to set for the authenticationMode property.
     */
    public set authenticationMode(value: MicrosoftAuthenticatorAuthenticationMode | undefined) {
        this._authenticationMode = value;
    };
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodTarget and sets the default values.
     */
    public constructor() {
        super();
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
        writer.writeEnumValue<MicrosoftAuthenticatorAuthenticationMode>("authenticationMode", this.authenticationMode);
    };
}
