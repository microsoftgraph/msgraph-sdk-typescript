import {AuthenticationMethodFeatureConfiguration} from './authenticationMethodFeatureConfiguration';
import {MicrosoftAuthenticatorFeatureSettings} from './microsoftAuthenticatorFeatureSettings';
import {serializeAuthenticationMethodFeatureConfiguration} from './serializeAuthenticationMethodFeatureConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorFeatureSettings(writer: SerializationWriter, microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {} as MicrosoftAuthenticatorFeatureSettings) : void {
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayAppInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState, serializeAuthenticationMethodFeatureConfiguration);
        writer.writeObjectValue<AuthenticationMethodFeatureConfiguration>("displayLocationInformationRequiredState", microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState, serializeAuthenticationMethodFeatureConfiguration);
        writer.writeStringValue("@odata.type", microsoftAuthenticatorFeatureSettings.odataType);
        writer.writeAdditionalData(microsoftAuthenticatorFeatureSettings.additionalData);
}
