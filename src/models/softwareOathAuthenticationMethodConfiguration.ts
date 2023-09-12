import { type AuthenticationMethodConfiguration } from './authenticationMethodConfiguration';
import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * A collection of groups that are enabled to use the authentication method. Expanded by default.
     */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
}
