import { type AuthenticationMethodFeatureConfiguration } from './authenticationMethodFeatureConfiguration';
import { createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue } from './createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue';
import { type MicrosoftAuthenticatorFeatureSettings } from './microsoftAuthenticatorFeatureSettings';
import { serializeAuthenticationMethodFeatureConfiguration } from './serializeAuthenticationMethodFeatureConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorFeatureSettings(microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {} as MicrosoftAuthenticatorFeatureSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "displayAppInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
        "displayLocationInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
        "@odata.type": n => { microsoftAuthenticatorFeatureSettings.odataType = n.getStringValue(); },
    }
}
