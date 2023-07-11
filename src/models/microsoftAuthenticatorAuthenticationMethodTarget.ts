import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget, Parsable {
    /**
     * The authenticationMode property
     */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
}
