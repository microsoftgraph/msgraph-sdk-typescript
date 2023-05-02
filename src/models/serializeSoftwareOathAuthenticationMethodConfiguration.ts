import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {SoftwareOathAuthenticationMethodConfiguration} from './softwareOathAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareOathAuthenticationMethodConfiguration(writer: SerializationWriter, softwareOathAuthenticationMethodConfiguration: SoftwareOathAuthenticationMethodConfiguration | undefined = {} as SoftwareOathAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, softwareOathAuthenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", softwareOathAuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
}
