import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {SmsAuthenticationMethodTarget} from './smsAuthenticationMethodTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SmsAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * A collection of groups that are enabled to use the authentication method.
     */
    includeTargets?: SmsAuthenticationMethodTarget[] | undefined;
}
