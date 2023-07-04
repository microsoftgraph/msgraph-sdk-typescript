import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SmsAuthenticationMethodTarget extends AuthenticationMethodTarget, Parsable {
    /**
     * Determines if users can use this authentication method to sign in to Azure AD. true if users can use this method for primary authentication, otherwise false.
     */
    isUsableForSignIn?: boolean | undefined;
}
