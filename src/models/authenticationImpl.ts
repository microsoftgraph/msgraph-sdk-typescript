import {Authentication} from './authentication';
import {AuthenticationMethod} from './authenticationMethod';
import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {AuthenticationMethodImpl, EntityImpl, Fido2AuthenticationMethodImpl, MicrosoftAuthenticatorAuthenticationMethodImpl, WindowsHelloForBusinessAuthenticationMethodImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class AuthenticationImpl extends EntityImpl implements Authentication, Parsable {
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    public fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    /** Represents all authentication methods registered to a user. */
    public methods?: AuthenticationMethod[] | undefined;
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    public microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    public windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new authentication and sets the default values.
     * @param authenticationParameterValue 
     */
    public constructor(authenticationParameterValue?: Authentication | undefined) {
        super();
        this.fido2Methods = authenticationParameterValue?.fido2Methods ;
        this.methods = authenticationParameterValue?.methods ;
        this.microsoftAuthenticatorMethods = authenticationParameterValue?.microsoftAuthenticatorMethods ;
        this.windowsHelloForBusinessMethods = authenticationParameterValue?.windowsHelloForBusinessMethods ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fido2Methods": n => { this.fido2Methods = n.getCollectionOfObjectValues<Fido2AuthenticationMethodImpl>(createFido2AuthenticationMethodFromDiscriminatorValue); },
            "methods": n => { this.methods = n.getCollectionOfObjectValues<AuthenticationMethodImpl>(createAuthenticationMethodFromDiscriminatorValue); },
            "microsoftAuthenticatorMethods": n => { this.microsoftAuthenticatorMethods = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); },
            "windowsHelloForBusinessMethods": n => { this.windowsHelloForBusinessMethods = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fido2Methods && this.fido2Methods.length != 0){        const fido2MethodsArrValue: Fido2AuthenticationMethodImpl[] = []; this.fido2Methods?.forEach(element => {fido2MethodsArrValue.push(new Fido2AuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethodImpl>("fido2Methods", fido2MethodsArrValue);
        }
        if(this.methods && this.methods.length != 0){        const methodsArrValue: AuthenticationMethodImpl[] = []; this.methods?.forEach(element => {methodsArrValue.push(new AuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<AuthenticationMethodImpl>("methods", methodsArrValue);
        }
        if(this.microsoftAuthenticatorMethods && this.microsoftAuthenticatorMethods.length != 0){        const microsoftAuthenticatorMethodsArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = []; this.microsoftAuthenticatorMethods?.forEach(element => {microsoftAuthenticatorMethodsArrValue.push(new MicrosoftAuthenticatorAuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>("microsoftAuthenticatorMethods", microsoftAuthenticatorMethodsArrValue);
        }
        if(this.windowsHelloForBusinessMethods && this.windowsHelloForBusinessMethods.length != 0){        const windowsHelloForBusinessMethodsArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = []; this.windowsHelloForBusinessMethods?.forEach(element => {windowsHelloForBusinessMethodsArrValue.push(new WindowsHelloForBusinessAuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>("windowsHelloForBusinessMethods", windowsHelloForBusinessMethodsArrValue);
        }
    };
}
