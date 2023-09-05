import { type AuthenticationMethodConfiguration } from './authenticationMethodConfiguration';
import { type MicrosoftAuthenticatorAuthenticationMethodTarget } from './microsoftAuthenticatorAuthenticationMethodTarget';
import { type MicrosoftAuthenticatorFeatureSettings } from './microsoftAuthenticatorFeatureSettings';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * A collection of Microsoft Authenticator settings such as application context and location context, and whether they are enabled for all users or specific users only.
     */
    featureSettings?: MicrosoftAuthenticatorFeatureSettings | undefined;
    /**
     * A collection of groups that are enabled to use the authentication method. Expanded by default.
     */
    includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
    /**
     * The isSoftwareOathEnabled property
     */
    isSoftwareOathEnabled?: boolean | undefined;
}
