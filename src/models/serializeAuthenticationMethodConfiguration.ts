import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodState} from './authenticationMethodState';
import {ExcludeTarget} from './excludeTarget';
import {serializeEntity} from './serializeEntity';
import {serializeExcludeTarget} from './serializeExcludeTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodConfiguration(writer: SerializationWriter, authenticationMethodConfiguration: AuthenticationMethodConfiguration | undefined = {} as AuthenticationMethodConfiguration) : void {
        serializeEntity(writer, authenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", authenticationMethodConfiguration.excludeTargets, serializeExcludeTarget);
        writer.writeEnumValue<AuthenticationMethodState>("state", authenticationMethodConfiguration.state);
}
