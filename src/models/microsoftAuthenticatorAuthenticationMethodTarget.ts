import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget, Partial<Parsable> {
    /** Determines which types of notifications can be used for sign-in. The possible values are: deviceBasedPush (passwordless only), push, and any. */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
}
