import {Authentication} from './authentication';
import {AuthenticationMethod} from './authenticationMethod';
import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {AuthenticationMethodImpl, EntityImpl, Fido2AuthenticationMethodImpl, MicrosoftAuthenticatorAuthenticationMethodImpl, TemporaryAccessPassAuthenticationMethodImpl, WindowsHelloForBusinessAuthenticationMethodImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class AuthenticationImpl extends EntityImpl implements Authentication {
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    public fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    /** Represents all authentication methods registered to a user. */
    public methods?: AuthenticationMethod[] | undefined;
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    public microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /** Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes. */
    public temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[] | undefined;
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    public windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new authentication and sets the default values.
     * @param authenticationParameterValue 
     */
    public constructor(authenticationParameterValue?: Authentication | undefined) {
        super(authenticationParameterValue);
        const fido2MethodsArrValue: Fido2AuthenticationMethodImpl[] = []; this.fido2Methods?.forEach(element => {fido2MethodsArrValue.push(element instanceof Fido2AuthenticationMethodImpl? element : new Fido2AuthenticationMethodImpl(element));});
        this.fido2Methods = fido2MethodsArrValue;
        const methodsArrValue: AuthenticationMethodImpl[] = []; this.methods?.forEach(element => {methodsArrValue.push(element instanceof AuthenticationMethodImpl? element : new AuthenticationMethodImpl(element));});
        this.methods = methodsArrValue;
        const microsoftAuthenticatorMethodsArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = []; this.microsoftAuthenticatorMethods?.forEach(element => {microsoftAuthenticatorMethodsArrValue.push(element instanceof MicrosoftAuthenticatorAuthenticationMethodImpl? element : new MicrosoftAuthenticatorAuthenticationMethodImpl(element));});
        this.microsoftAuthenticatorMethods = microsoftAuthenticatorMethodsArrValue;
        const temporaryAccessPassMethodsArrValue: TemporaryAccessPassAuthenticationMethodImpl[] = []; this.temporaryAccessPassMethods?.forEach(element => {temporaryAccessPassMethodsArrValue.push(element instanceof TemporaryAccessPassAuthenticationMethodImpl? element : new TemporaryAccessPassAuthenticationMethodImpl(element));});
        this.temporaryAccessPassMethods = temporaryAccessPassMethodsArrValue;
        const windowsHelloForBusinessMethodsArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = []; this.windowsHelloForBusinessMethods?.forEach(element => {windowsHelloForBusinessMethodsArrValue.push(element instanceof WindowsHelloForBusinessAuthenticationMethodImpl? element : new WindowsHelloForBusinessAuthenticationMethodImpl(element));});
        this.windowsHelloForBusinessMethods = windowsHelloForBusinessMethodsArrValue;
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
            "temporaryAccessPassMethods": n => { this.temporaryAccessPassMethods = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethodImpl>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
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
        if(this.fido2Methods && this.fido2Methods.length != 0){        const fido2MethodsArrValue: Fido2AuthenticationMethodImpl[] = []; this.fido2Methods?.forEach(element => {fido2MethodsArrValue.push(element instanceof Fido2AuthenticationMethodImpl? element : new Fido2AuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<Fido2AuthenticationMethodImpl>("fido2Methods", fido2MethodsArrValue);
        }
        if(this.methods && this.methods.length != 0){        const methodsArrValue: AuthenticationMethodImpl[] = []; this.methods?.forEach(element => {methodsArrValue.push(element instanceof AuthenticationMethodImpl? element : new AuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<AuthenticationMethodImpl>("methods", methodsArrValue);
        }
        if(this.microsoftAuthenticatorMethods && this.microsoftAuthenticatorMethods.length != 0){        const microsoftAuthenticatorMethodsArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = []; this.microsoftAuthenticatorMethods?.forEach(element => {microsoftAuthenticatorMethodsArrValue.push(element instanceof MicrosoftAuthenticatorAuthenticationMethodImpl? element : new MicrosoftAuthenticatorAuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>("microsoftAuthenticatorMethods", microsoftAuthenticatorMethodsArrValue);
        }
        if(this.temporaryAccessPassMethods && this.temporaryAccessPassMethods.length != 0){        const temporaryAccessPassMethodsArrValue: TemporaryAccessPassAuthenticationMethodImpl[] = []; this.temporaryAccessPassMethods?.forEach(element => {temporaryAccessPassMethodsArrValue.push(element instanceof TemporaryAccessPassAuthenticationMethodImpl? element : new TemporaryAccessPassAuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethodImpl>("temporaryAccessPassMethods", temporaryAccessPassMethodsArrValue);
        }
        if(this.windowsHelloForBusinessMethods && this.windowsHelloForBusinessMethods.length != 0){        const windowsHelloForBusinessMethodsArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = []; this.windowsHelloForBusinessMethods?.forEach(element => {windowsHelloForBusinessMethodsArrValue.push(element instanceof WindowsHelloForBusinessAuthenticationMethodImpl? element : new WindowsHelloForBusinessAuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>("windowsHelloForBusinessMethods", windowsHelloForBusinessMethodsArrValue);
        }
    };
}
