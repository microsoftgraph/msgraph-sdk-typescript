import {AuthenticationMethodTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SmsAuthenticationMethodTarget extends AuthenticationMethodTarget implements Parsable {
    /** Determines if users can use this authentication method to sign in to Azure AD. true if users can use this method for primary authentication, otherwise false. */
    private _isUsableForSignIn?: boolean | undefined;
    /**
     * Instantiates a new SmsAuthenticationMethodTarget and sets the default values.
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
            "isUsableForSignIn": n => { this.isUsableForSignIn = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isUsableForSignIn property value. Determines if users can use this authentication method to sign in to Azure AD. true if users can use this method for primary authentication, otherwise false.
     * @returns a boolean
     */
    public get isUsableForSignIn() {
        return this._isUsableForSignIn;
    };
    /**
     * Sets the isUsableForSignIn property value. Determines if users can use this authentication method to sign in to Azure AD. true if users can use this method for primary authentication, otherwise false.
     * @param value Value to set for the isUsableForSignIn property.
     */
    public set isUsableForSignIn(value: boolean | undefined) {
        this._isUsableForSignIn = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isUsableForSignIn", this.isUsableForSignIn);
    };
}
