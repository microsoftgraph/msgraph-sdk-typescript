import type {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {MicrosoftAuthenticatorAuthenticationMode} from './microsoftAuthenticatorAuthenticationMode';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget, Parsable {
    /**
     * The authenticationMode property
     */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
}
