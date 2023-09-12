import { type AuthenticationMethodFeatureConfiguration } from './authenticationMethodFeatureConfiguration';
import { type MicrosoftAuthenticatorFeatureSettings } from './microsoftAuthenticatorFeatureSettings';
import { serializeAuthenticationMethodFeatureConfiguration } from './serializeAuthenticationMethodFeatureConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorFeatureSettings(writer: SerializationWriter, microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {} as MicrosoftAuthenticatorFeatureSettings) : void {
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayAppInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState, serializeAuthenticationMethodFeatureConfiguration);
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayLocationInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState, serializeAuthenticationMethodFeatureConfiguration);
        writer.writeStringValue("@odata.type", microsoftAuthenticatorFeatureSettings.odataType);
        writer.writeAdditionalData(microsoftAuthenticatorFeatureSettings.additionalData);
}
