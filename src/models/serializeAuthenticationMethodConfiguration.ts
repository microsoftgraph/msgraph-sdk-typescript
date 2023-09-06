import { type AuthenticationMethodConfiguration } from './authenticationMethodConfiguration';
import { AuthenticationMethodState } from './authenticationMethodState';
import { type ExcludeTarget } from './excludeTarget';
import { serializeEntity } from './serializeEntity';
import { serializeExcludeTarget } from './serializeExcludeTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfiguration(writer: SerializationWriter, authenticationMethodConfiguration: AuthenticationMethodConfiguration | undefined = {} as AuthenticationMethodConfiguration) : void {
        serializeEntity(writer, authenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", authenticationMethodConfiguration.excludeTargets, serializeExcludeTarget);
        writer.writeEnumValue<AuthenticationMethodState>("state", authenticationMethodConfiguration.state);
}
