import {AuthenticationCombinationConfiguration} from './authenticationCombinationConfiguration';
import {AuthenticationMethodModes} from './authenticationMethodModes';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationCombinationConfiguration(authenticationCombinationConfiguration: AuthenticationCombinationConfiguration | undefined = {} as AuthenticationCombinationConfiguration, writer: SerializationWriter) : void {
        serializeEntity(writer, authenticationCombinationConfiguration)
        if(authenticationCombinationConfiguration.appliesToCombinations)
        writer.writeEnumValue<AuthenticationMethodModes>("appliesToCombinations", ...authenticationCombinationConfiguration.appliesToCombinations);
}
