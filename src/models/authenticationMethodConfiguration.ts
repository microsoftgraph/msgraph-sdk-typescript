import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './entity';
import {ExcludeTarget} from './excludeTarget';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfiguration extends Entity, Parsable {
    /**
     * Groups of users that are excluded from a policy.
     */
    excludeTargets?: ExcludeTarget[] | undefined;
    /**
     * The state of the policy. Possible values are: enabled, disabled.
     */
    state?: AuthenticationMethodState | undefined;
}
