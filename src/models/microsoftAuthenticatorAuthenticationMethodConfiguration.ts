import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Partial<Parsable> {
    /** A collection of users or groups who are enabled to use the authentication method. */
    includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
}
