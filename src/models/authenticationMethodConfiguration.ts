import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfiguration extends Entity, Partial<Parsable> {
    /** The state of the policy. Possible values are: enabled, disabled. */
    state?: AuthenticationMethodState | undefined;
}
