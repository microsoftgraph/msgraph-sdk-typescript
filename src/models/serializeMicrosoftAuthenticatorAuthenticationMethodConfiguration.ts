import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './microsoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorFeatureSettings} from './microsoftAuthenticatorFeatureSettings';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeMicrosoftAuthenticatorAuthenticationMethodTarget} from './serializeMicrosoftAuthenticatorAuthenticationMethodTarget';
import {serializeMicrosoftAuthenticatorFeatureSettings} from './serializeMicrosoftAuthenticatorFeatureSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethodConfiguration(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethodConfiguration: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, microsoftAuthenticatorAuthenticationMethodConfiguration)
        writer.writeObjectValue<MicrosoftAuthenticatorFeatureSettings>("featureSettings", microsoftAuthenticatorAuthenticationMethodConfiguration.featureSettings, serializeMicrosoftAuthenticatorFeatureSettings);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTarget>("includeTargets", microsoftAuthenticatorAuthenticationMethodConfiguration.includeTargets, serializeMicrosoftAuthenticatorAuthenticationMethodTarget);
        writer.writeBooleanValue("isSoftwareOathEnabled", microsoftAuthenticatorAuthenticationMethodConfiguration.isSoftwareOathEnabled);
}
