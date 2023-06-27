import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * Default length in characters of a Temporary Access Pass object. Must be between 8 and 48 characters.
     */
    defaultLength?: number | undefined;
    /**
     * Default lifetime in minutes for a Temporary Access Pass. Value can be any integer between the minimumLifetimeInMinutes and maximumLifetimeInMinutes.
     */
    defaultLifetimeInMinutes?: number | undefined;
    /**
     * A collection of groups that are enabled to use the authentication method.
     */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * If true, all the passes in the tenant will be restricted to one-time use. If false, passes in the tenant can be created to be either one-time use or reusable.
     */
    isUsableOnce?: boolean | undefined;
    /**
     * Maximum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     */
    maximumLifetimeInMinutes?: number | undefined;
    /**
     * Minimum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     */
    minimumLifetimeInMinutes?: number | undefined;
}
