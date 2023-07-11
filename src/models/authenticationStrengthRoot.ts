import {AuthenticationMethodModeDetail} from './authenticationMethodModeDetail';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthRoot extends Entity, Parsable {
    /**
     * Names and descriptions of all valid authentication method modes in the system.
     */
    authenticationMethodModes?: AuthenticationMethodModeDetail[] | undefined;
    /**
     * The combinations property
     */
    combinations?: AuthenticationMethodModes[] | undefined;
    /**
     * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     */
    policies?: AuthenticationStrengthPolicy[] | undefined;
}
