import { type MicrosoftAuthenticatorAuthenticationMethodConfiguration } from './microsoftAuthenticatorAuthenticationMethodConfiguration';
import { type MicrosoftAuthenticatorAuthenticationMethodTarget } from './microsoftAuthenticatorAuthenticationMethodTarget';
import { type MicrosoftAuthenticatorFeatureSettings } from './microsoftAuthenticatorFeatureSettings';
import { serializeAuthenticationMethodConfiguration } from './serializeAuthenticationMethodConfiguration';
import { serializeMicrosoftAuthenticatorAuthenticationMethodTarget } from './serializeMicrosoftAuthenticatorAuthenticationMethodTarget';
import { serializeMicrosoftAuthenticatorFeatureSettings } from './serializeMicrosoftAuthenticatorFeatureSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodConfiguration: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, microsoftAuthenticatorAuthenticationMethodConfiguration)
        writer.writeObjectValue<MicrosoftAuthenticatorFeatureSettings>("featureSettings", microsoftAuthenticatorAuthenticationMethodConfiguration.featureSettings, serializeMicrosoftAuthenticatorFeatureSettings);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTarget>("includeTargets", microsoftAuthenticatorAuthenticationMethodConfiguration.includeTargets, serializeMicrosoftAuthenticatorAuthenticationMethodTarget);
        writer.writeBooleanValue("isSoftwareOathEnabled", microsoftAuthenticatorAuthenticationMethodConfiguration.isSoftwareOathEnabled);
}
