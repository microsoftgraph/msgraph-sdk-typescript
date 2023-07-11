import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2CombinationConfiguration extends AuthenticationCombinationConfiguration, Parsable {
    /**
     * A list of AAGUIDs allowed to be used as part of the specified authentication method combinations.
     */
    allowedAAGUIDs?: string[] | undefined;
}
