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
    private _fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    /** Represents all authentication methods registered to a user. */
    private _methods?: AuthenticationMethod[] | undefined;
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    private _microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /** Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes. */
    private _temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[] | undefined;
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    private _windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new authentication and sets the default values.
     * @param authenticationParameterValue 
     */
    public constructor(authenticationParameterValue?: Authentication | undefined) {
        super(authenticationParameterValue);
        this._fido2Methods = authenticationParameterValue?.fido2Methods;
        this._methods = authenticationParameterValue?.methods;
        this._microsoftAuthenticatorMethods = authenticationParameterValue?.microsoftAuthenticatorMethods;
        this._temporaryAccessPassMethods = authenticationParameterValue?.temporaryAccessPassMethods;
        this._windowsHelloForBusinessMethods = authenticationParameterValue?.windowsHelloForBusinessMethods;
    };
    /**
     * Gets the fido2Methods property value. Represents the FIDO2 security keys registered to a user for authentication.
     * @returns a Fido2AuthenticationMethodInterface
     */
    public get fido2Methods() {
        return this._fido2Methods;
    };
    /**
     * Sets the fido2Methods property value. Represents the FIDO2 security keys registered to a user for authentication.
     * @param value Value to set for the fido2Methods property.
     */
    public set fido2Methods(value: Fido2AuthenticationMethod[] | undefined) {
        if(value) {
            const fido2MethodsArrValue: Fido2AuthenticationMethodImpl[] = [];
            this.fido2Methods?.forEach(element => {
                fido2MethodsArrValue.push((element instanceof Fido2AuthenticationMethodImpl? element as Fido2AuthenticationMethodImpl:new Fido2AuthenticationMethodImpl(element)));
            });
            this._fido2Methods = fido2MethodsArrValue;
        }
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
     * Gets the methods property value. Represents all authentication methods registered to a user.
     * @returns a AuthenticationMethodInterface
     */
    public get methods() {
        return this._methods;
    };
    /**
     * Sets the methods property value. Represents all authentication methods registered to a user.
     * @param value Value to set for the methods property.
     */
    public set methods(value: AuthenticationMethod[] | undefined) {
        if(value) {
            const methodsArrValue: AuthenticationMethodImpl[] = [];
            this.methods?.forEach(element => {
                methodsArrValue.push((element instanceof AuthenticationMethodImpl? element as AuthenticationMethodImpl:new AuthenticationMethodImpl(element)));
            });
            this._methods = methodsArrValue;
        }
    };
    /**
     * Gets the microsoftAuthenticatorMethods property value. The details of the Microsoft Authenticator app registered to a user for authentication.
     * @returns a MicrosoftAuthenticatorAuthenticationMethodInterface
     */
    public get microsoftAuthenticatorMethods() {
        return this._microsoftAuthenticatorMethods;
    };
    /**
     * Sets the microsoftAuthenticatorMethods property value. The details of the Microsoft Authenticator app registered to a user for authentication.
     * @param value Value to set for the microsoftAuthenticatorMethods property.
     */
    public set microsoftAuthenticatorMethods(value: MicrosoftAuthenticatorAuthenticationMethod[] | undefined) {
        if(value) {
            const microsoftAuthenticatorMethodsArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = [];
            this.microsoftAuthenticatorMethods?.forEach(element => {
                microsoftAuthenticatorMethodsArrValue.push((element instanceof MicrosoftAuthenticatorAuthenticationMethodImpl? element as MicrosoftAuthenticatorAuthenticationMethodImpl:new MicrosoftAuthenticatorAuthenticationMethodImpl(element)));
            });
            this._microsoftAuthenticatorMethods = microsoftAuthenticatorMethodsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fido2Methods && this.fido2Methods.length != 0){        const fido2MethodsArrValue: Fido2AuthenticationMethodImpl[] = [];
        this.fido2Methods?.forEach(element => {
            fido2MethodsArrValue.push((element instanceof Fido2AuthenticationMethodImpl? element as Fido2AuthenticationMethodImpl:new Fido2AuthenticationMethodImpl(element)));
        });
            writer.writeCollectionOfObjectValues<Fido2AuthenticationMethodImpl>("fido2Methods", fido2MethodsArrValue);
        }
        if(this.methods && this.methods.length != 0){        const methodsArrValue: AuthenticationMethodImpl[] = [];
        this.methods?.forEach(element => {
            methodsArrValue.push((element instanceof AuthenticationMethodImpl? element as AuthenticationMethodImpl:new AuthenticationMethodImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AuthenticationMethodImpl>("methods", methodsArrValue);
        }
        if(this.microsoftAuthenticatorMethods && this.microsoftAuthenticatorMethods.length != 0){        const microsoftAuthenticatorMethodsArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = [];
        this.microsoftAuthenticatorMethods?.forEach(element => {
            microsoftAuthenticatorMethodsArrValue.push((element instanceof MicrosoftAuthenticatorAuthenticationMethodImpl? element as MicrosoftAuthenticatorAuthenticationMethodImpl:new MicrosoftAuthenticatorAuthenticationMethodImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>("microsoftAuthenticatorMethods", microsoftAuthenticatorMethodsArrValue);
        }
        if(this.temporaryAccessPassMethods && this.temporaryAccessPassMethods.length != 0){        const temporaryAccessPassMethodsArrValue: TemporaryAccessPassAuthenticationMethodImpl[] = [];
        this.temporaryAccessPassMethods?.forEach(element => {
            temporaryAccessPassMethodsArrValue.push((element instanceof TemporaryAccessPassAuthenticationMethodImpl? element as TemporaryAccessPassAuthenticationMethodImpl:new TemporaryAccessPassAuthenticationMethodImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethodImpl>("temporaryAccessPassMethods", temporaryAccessPassMethodsArrValue);
        }
        if(this.windowsHelloForBusinessMethods && this.windowsHelloForBusinessMethods.length != 0){        const windowsHelloForBusinessMethodsArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = [];
        this.windowsHelloForBusinessMethods?.forEach(element => {
            windowsHelloForBusinessMethodsArrValue.push((element instanceof WindowsHelloForBusinessAuthenticationMethodImpl? element as WindowsHelloForBusinessAuthenticationMethodImpl:new WindowsHelloForBusinessAuthenticationMethodImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>("windowsHelloForBusinessMethods", windowsHelloForBusinessMethodsArrValue);
        }
    };
    /**
     * Gets the temporaryAccessPassMethods property value. Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @returns a TemporaryAccessPassAuthenticationMethodInterface
     */
    public get temporaryAccessPassMethods() {
        return this._temporaryAccessPassMethods;
    };
    /**
     * Sets the temporaryAccessPassMethods property value. Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @param value Value to set for the temporaryAccessPassMethods property.
     */
    public set temporaryAccessPassMethods(value: TemporaryAccessPassAuthenticationMethod[] | undefined) {
        if(value) {
            const temporaryAccessPassMethodsArrValue: TemporaryAccessPassAuthenticationMethodImpl[] = [];
            this.temporaryAccessPassMethods?.forEach(element => {
                temporaryAccessPassMethodsArrValue.push((element instanceof TemporaryAccessPassAuthenticationMethodImpl? element as TemporaryAccessPassAuthenticationMethodImpl:new TemporaryAccessPassAuthenticationMethodImpl(element)));
            });
            this._temporaryAccessPassMethods = temporaryAccessPassMethodsArrValue;
        }
    };
    /**
     * Gets the windowsHelloForBusinessMethods property value. Represents the Windows Hello for Business authentication method registered to a user for authentication.
     * @returns a WindowsHelloForBusinessAuthenticationMethodInterface
     */
    public get windowsHelloForBusinessMethods() {
        return this._windowsHelloForBusinessMethods;
    };
    /**
     * Sets the windowsHelloForBusinessMethods property value. Represents the Windows Hello for Business authentication method registered to a user for authentication.
     * @param value Value to set for the windowsHelloForBusinessMethods property.
     */
    public set windowsHelloForBusinessMethods(value: WindowsHelloForBusinessAuthenticationMethod[] | undefined) {
        if(value) {
            const windowsHelloForBusinessMethodsArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = [];
            this.windowsHelloForBusinessMethods?.forEach(element => {
                windowsHelloForBusinessMethodsArrValue.push((element instanceof WindowsHelloForBusinessAuthenticationMethodImpl? element as WindowsHelloForBusinessAuthenticationMethodImpl:new WindowsHelloForBusinessAuthenticationMethodImpl(element)));
            });
            this._windowsHelloForBusinessMethods = windowsHelloForBusinessMethodsArrValue;
        }
    };
}
