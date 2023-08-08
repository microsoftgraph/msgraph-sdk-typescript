import type {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import type {TemporaryAccessPassAuthenticationMethodConfiguration} from './temporaryAccessPassAuthenticationMethodConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodConfiguration(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodConfiguration: TemporaryAccessPassAuthenticationMethodConfiguration | undefined = {} as TemporaryAccessPassAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, temporaryAccessPassAuthenticationMethodConfiguration)
        writer.writeNumberValue("defaultLength", temporaryAccessPassAuthenticationMethodConfiguration.defaultLength);
        writer.writeNumberValue("defaultLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.defaultLifetimeInMinutes);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", temporaryAccessPassAuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
        writer.writeBooleanValue("isUsableOnce", temporaryAccessPassAuthenticationMethodConfiguration.isUsableOnce);
        writer.writeNumberValue("maximumLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.maximumLifetimeInMinutes);
        writer.writeNumberValue("minimumLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.minimumLifetimeInMinutes);
}
