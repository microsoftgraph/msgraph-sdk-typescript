import type {AuthenticationMethod} from './authenticationMethod';
import type {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import type {Entity} from './entity';
import type {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import type {LongRunningOperation} from './longRunningOperation';
import type {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import type {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import type {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import type {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import type {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Authentication extends Entity, Parsable {
    /**
     * The email address registered to a user for authentication.
     */
    emailMethods?: EmailAuthenticationMethod[] | undefined;
    /**
     * Represents the FIDO2 security keys registered to a user for authentication.
     */
    fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    /**
     * Represents all authentication methods registered to a user.
     */
    methods?: AuthenticationMethod[] | undefined;
    /**
     * The details of the Microsoft Authenticator app registered to a user for authentication.
     */
    microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /**
     * Represents the status of a long-running operation.
     */
    operations?: LongRunningOperation[] | undefined;
    /**
     * Represents the password that's registered to a user for authentication. For security, the password itself will never be returned in the object, but action can be taken to reset a password.
     */
    passwordMethods?: PasswordAuthenticationMethod[] | undefined;
    /**
     * The phone numbers registered to a user for authentication.
     */
    phoneMethods?: PhoneAuthenticationMethod[] | undefined;
    /**
     * The software OATH TOTP applications registered to a user for authentication.
     */
    softwareOathMethods?: SoftwareOathAuthenticationMethod[] | undefined;
    /**
     * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     */
    temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethod[] | undefined;
    /**
     * Represents the Windows Hello for Business authentication method registered to a user for authentication.
     */
    windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
}
