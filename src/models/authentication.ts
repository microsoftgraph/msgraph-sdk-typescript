import {AuthenticationMethod} from './authenticationMethod';
import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {Entity} from './entity';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {LongRunningOperation} from './longRunningOperation';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
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
