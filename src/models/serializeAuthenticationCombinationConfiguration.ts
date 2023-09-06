import { type AuthenticationCombinationConfiguration } from './authenticationCombinationConfiguration';
import { AuthenticationMethodModes } from './authenticationMethodModes';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationCombinationConfiguration(writer: SerializationWriter, authenticationCombinationConfiguration: AuthenticationCombinationConfiguration | undefined = {} as AuthenticationCombinationConfiguration) : void {
        serializeEntity(writer, authenticationCombinationConfiguration)
        if(authenticationCombinationConfiguration.appliesToCombinations)
        writer.writeEnumValue<AuthenticationMethodModes[]>("appliesToCombinations", ...authenticationCombinationConfiguration.appliesToCombinations);
}
