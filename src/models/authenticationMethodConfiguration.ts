import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './entity';

export interface AuthenticationMethodConfiguration extends Entity{
    /** The state of the policy. Possible values are: enabled, disabled. */
    state?:AuthenticationMethodState | undefined;
}
