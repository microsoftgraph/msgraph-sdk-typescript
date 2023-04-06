import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {createEmailAuthenticationMethodFromDiscriminatorValue} from './createEmailAuthenticationMethodFromDiscriminatorValue';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {createLongRunningOperationFromDiscriminatorValue} from './createLongRunningOperationFromDiscriminatorValue';
import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {createPasswordAuthenticationMethodFromDiscriminatorValue} from './createPasswordAuthenticationMethodFromDiscriminatorValue';
import {createPhoneAuthenticationMethodFromDiscriminatorValue} from './createPhoneAuthenticationMethodFromDiscriminatorValue';
import {createSoftwareOathAuthenticationMethodFromDiscriminatorValue} from './createSoftwareOathAuthenticationMethodFromDiscriminatorValue';
import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {AuthenticationMethod, EmailAuthenticationMethod, Entity, Fido2AuthenticationMethod, LongRunningOperation, MicrosoftAuthenticatorAuthenticationMethod, PasswordAuthenticationMethod, PhoneAuthenticationMethod, SoftwareOathAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Authentication extends Entity implements Parsable {
    /** The email address registered to a user for authentication. */
    private _emailMethods?: EmailAuthenticationMethod[] | undefined;
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    private _fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    /** Represents all authentication methods registered to a user. */
    private _methods?: AuthenticationMethod[] | undefined;
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    private _microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /** Represents the status of a long-running operation. */
    private _operations?: LongRunningOperation[] | undefined;
    /** Represents the password that's registered to a user for authentication. For security, the password itself will never be returned in the object, but action can be taken to reset a password. */
    private _passwordMethods?: PasswordAuthenticationMethod[] | undefined;
    /** The phone numbers registered to a user for authentication. */
    private _phoneMethods?: PhoneAuthenticationMethod[] | undefined;
    /** The software OATH TOTP applications registered to a user for authentication. */
    private _softwareOathMethods?: SoftwareOathAuthenticationMethod[] | undefined;
    /** Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes. */
    private _temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[] | undefined;
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    private _windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new Authentication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the emailMethods property value. The email address registered to a user for authentication.
     * @returns a emailAuthenticationMethod
     */
    public get emailMethods() {
        return this._emailMethods;
    };
    /**
     * Sets the emailMethods property value. The email address registered to a user for authentication.
     * @param value Value to set for the emailMethods property.
     */
    public set emailMethods(value: EmailAuthenticationMethod[] | undefined) {
        this._emailMethods = value;
    };
    /**
     * Gets the fido2Methods property value. Represents the FIDO2 security keys registered to a user for authentication.
     * @returns a fido2AuthenticationMethod
     */
    public get fido2Methods() {
        return this._fido2Methods;
    };
    /**
     * Sets the fido2Methods property value. Represents the FIDO2 security keys registered to a user for authentication.
     * @param value Value to set for the fido2Methods property.
     */
    public set fido2Methods(value: Fido2AuthenticationMethod[] | undefined) {
        this._fido2Methods = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "emailMethods": n => { this.emailMethods = n.getCollectionOfObjectValues<EmailAuthenticationMethod>(createEmailAuthenticationMethodFromDiscriminatorValue); },
            "fido2Methods": n => { this.fido2Methods = n.getCollectionOfObjectValues<Fido2AuthenticationMethod>(createFido2AuthenticationMethodFromDiscriminatorValue); },
            "methods": n => { this.methods = n.getCollectionOfObjectValues<AuthenticationMethod>(createAuthenticationMethodFromDiscriminatorValue); },
            "microsoftAuthenticatorMethods": n => { this.microsoftAuthenticatorMethods = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<LongRunningOperation>(createLongRunningOperationFromDiscriminatorValue); },
            "passwordMethods": n => { this.passwordMethods = n.getCollectionOfObjectValues<PasswordAuthenticationMethod>(createPasswordAuthenticationMethodFromDiscriminatorValue); },
            "phoneMethods": n => { this.phoneMethods = n.getCollectionOfObjectValues<PhoneAuthenticationMethod>(createPhoneAuthenticationMethodFromDiscriminatorValue); },
            "softwareOathMethods": n => { this.softwareOathMethods = n.getCollectionOfObjectValues<SoftwareOathAuthenticationMethod>(createSoftwareOathAuthenticationMethodFromDiscriminatorValue); },
            "temporaryAccessPassMethods": n => { this.temporaryAccessPassMethods = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
            "windowsHelloForBusinessMethods": n => { this.windowsHelloForBusinessMethods = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the methods property value. Represents all authentication methods registered to a user.
     * @returns a authenticationMethod
     */
    public get methods() {
        return this._methods;
    };
    /**
     * Sets the methods property value. Represents all authentication methods registered to a user.
     * @param value Value to set for the methods property.
     */
    public set methods(value: AuthenticationMethod[] | undefined) {
        this._methods = value;
    };
    /**
     * Gets the microsoftAuthenticatorMethods property value. The details of the Microsoft Authenticator app registered to a user for authentication.
     * @returns a microsoftAuthenticatorAuthenticationMethod
     */
    public get microsoftAuthenticatorMethods() {
        return this._microsoftAuthenticatorMethods;
    };
    /**
     * Sets the microsoftAuthenticatorMethods property value. The details of the Microsoft Authenticator app registered to a user for authentication.
     * @param value Value to set for the microsoftAuthenticatorMethods property.
     */
    public set microsoftAuthenticatorMethods(value: MicrosoftAuthenticatorAuthenticationMethod[] | undefined) {
        this._microsoftAuthenticatorMethods = value;
    };
    /**
     * Gets the operations property value. Represents the status of a long-running operation.
     * @returns a longRunningOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. Represents the status of a long-running operation.
     * @param value Value to set for the operations property.
     */
    public set operations(value: LongRunningOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the passwordMethods property value. Represents the password that's registered to a user for authentication. For security, the password itself will never be returned in the object, but action can be taken to reset a password.
     * @returns a passwordAuthenticationMethod
     */
    public get passwordMethods() {
        return this._passwordMethods;
    };
    /**
     * Sets the passwordMethods property value. Represents the password that's registered to a user for authentication. For security, the password itself will never be returned in the object, but action can be taken to reset a password.
     * @param value Value to set for the passwordMethods property.
     */
    public set passwordMethods(value: PasswordAuthenticationMethod[] | undefined) {
        this._passwordMethods = value;
    };
    /**
     * Gets the phoneMethods property value. The phone numbers registered to a user for authentication.
     * @returns a phoneAuthenticationMethod
     */
    public get phoneMethods() {
        return this._phoneMethods;
    };
    /**
     * Sets the phoneMethods property value. The phone numbers registered to a user for authentication.
     * @param value Value to set for the phoneMethods property.
     */
    public set phoneMethods(value: PhoneAuthenticationMethod[] | undefined) {
        this._phoneMethods = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EmailAuthenticationMethod>("emailMethods", this.emailMethods);
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethod>("fido2Methods", this.fido2Methods);
        writer.writeCollectionOfObjectValues<AuthenticationMethod>("methods", this.methods);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>("microsoftAuthenticatorMethods", this.microsoftAuthenticatorMethods);
        writer.writeCollectionOfObjectValues<LongRunningOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<PasswordAuthenticationMethod>("passwordMethods", this.passwordMethods);
        writer.writeCollectionOfObjectValues<PhoneAuthenticationMethod>("phoneMethods", this.phoneMethods);
        writer.writeCollectionOfObjectValues<SoftwareOathAuthenticationMethod>("softwareOathMethods", this.softwareOathMethods);
        writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>("temporaryAccessPassMethods", this.temporaryAccessPassMethods);
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>("windowsHelloForBusinessMethods", this.windowsHelloForBusinessMethods);
    };
    /**
     * Gets the softwareOathMethods property value. The software OATH TOTP applications registered to a user for authentication.
     * @returns a softwareOathAuthenticationMethod
     */
    public get softwareOathMethods() {
        return this._softwareOathMethods;
    };
    /**
     * Sets the softwareOathMethods property value. The software OATH TOTP applications registered to a user for authentication.
     * @param value Value to set for the softwareOathMethods property.
     */
    public set softwareOathMethods(value: SoftwareOathAuthenticationMethod[] | undefined) {
        this._softwareOathMethods = value;
    };
    /**
     * Gets the temporaryAccessPassMethods property value. Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @returns a temporaryAccessPassAuthenticationMethod
     */
    public get temporaryAccessPassMethods() {
        return this._temporaryAccessPassMethods;
    };
    /**
     * Sets the temporaryAccessPassMethods property value. Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @param value Value to set for the temporaryAccessPassMethods property.
     */
    public set temporaryAccessPassMethods(value: TemporaryAccessPassAuthenticationMethod[] | undefined) {
        this._temporaryAccessPassMethods = value;
    };
    /**
     * Gets the windowsHelloForBusinessMethods property value. Represents the Windows Hello for Business authentication method registered to a user for authentication.
     * @returns a windowsHelloForBusinessAuthenticationMethod
     */
    public get windowsHelloForBusinessMethods() {
        return this._windowsHelloForBusinessMethods;
    };
    /**
     * Sets the windowsHelloForBusinessMethods property value. Represents the Windows Hello for Business authentication method registered to a user for authentication.
     * @param value Value to set for the windowsHelloForBusinessMethods property.
     */
    public set windowsHelloForBusinessMethods(value: WindowsHelloForBusinessAuthenticationMethod[] | undefined) {
        this._windowsHelloForBusinessMethods = value;
    };
}
