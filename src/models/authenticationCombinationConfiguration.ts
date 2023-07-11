import {AuthenticationMethodModes} from './authenticationMethodModes';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationCombinationConfiguration extends Entity, Parsable {
    /**
     * Which authentication method combinations this configuration applies to. Must be an allowedCombinations object that's defined for the authenticationStrengthPolicy. The only possible value for fido2combinationConfigurations is 'fido2'.
     */
    appliesToCombinations?: AuthenticationMethodModes[] | undefined;
}
