import {AuthenticationMethod} from './authenticationMethod';
import {Entity} from './entity';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';

export interface Authentication extends Entity{
    /** Represents the FIDO2 security keys registered to a user for authentication. */
    fido2Methods?:Fido2AuthenticationMethod[] | undefined;
    /** Represents all authentication methods registered to a user. */
    methods?:AuthenticationMethod[] | undefined;
    /** The details of the Microsoft Authenticator app registered to a user for authentication. */
    microsoftAuthenticatorMethods?:MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /** Represents the Windows Hello for Business authentication method registered to a user for authentication. */
    windowsHelloForBusinessMethods?:WindowsHelloForBusinessAuthenticationMethod[] | undefined;
}
