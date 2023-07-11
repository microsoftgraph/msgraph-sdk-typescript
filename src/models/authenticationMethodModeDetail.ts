import {BaseAuthenticationMethod} from './baseAuthenticationMethod';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodModeDetail extends Entity, Parsable {
    /**
     * The authenticationMethod property
     */
    authenticationMethod?: BaseAuthenticationMethod | undefined;
    /**
     * The display name of this mode
     */
    displayName?: string | undefined;
}
