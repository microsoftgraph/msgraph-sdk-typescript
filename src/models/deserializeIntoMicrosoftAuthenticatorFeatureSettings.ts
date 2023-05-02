import {AuthenticationMethodFeatureConfiguration} from './authenticationMethodFeatureConfiguration';
import {createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue} from './createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue';
import {MicrosoftAuthenticatorFeatureSettings} from './microsoftAuthenticatorFeatureSettings';
import {serializeAuthenticationMethodFeatureConfiguration} from './serializeAuthenticationMethodFeatureConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorFeatureSettings(microsoftAuthenticatorFeatureSettings: MicrosoftAuthenticatorFeatureSettings | undefined = {} as MicrosoftAuthenticatorFeatureSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "displayAppInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayAppInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
        "displayLocationInformationRequiredState": n => { microsoftAuthenticatorFeatureSettings.displayLocationInformationRequiredState = n.getObjectValue<AuthenticationMethodFeatureConfiguration>(createAuthenticationMethodFeatureConfigurationFromDiscriminatorValue); },
        "@odata.type": n => { microsoftAuthenticatorFeatureSettings.odataType = n.getStringValue(); },
    }
}
