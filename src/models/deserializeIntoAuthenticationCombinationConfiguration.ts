import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationCombinationConfiguration(authenticationCombinationConfiguration: AuthenticationCombinationConfiguration | undefined = {} as AuthenticationCombinationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationCombinationConfiguration),
        "appliesToCombinations": n => { authenticationCombinationConfiguration.appliesToCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
    }
}
