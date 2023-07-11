import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VoiceAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * A collection of groups that are enabled to use the authentication method. Expanded by default.
     */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * true if users can register office phones, otherwise, false.
     */
    isOfficePhoneAllowed?: boolean | undefined;
}
