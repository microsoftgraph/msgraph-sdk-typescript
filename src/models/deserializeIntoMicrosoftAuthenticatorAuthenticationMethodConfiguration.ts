import {createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue';
import {createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue} from './createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './microsoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {MicrosoftAuthenticatorFeatureSettings} from './microsoftAuthenticatorFeatureSettings';
import {serializeMicrosoftAuthenticatorAuthenticationMethodTarget} from './serializeMicrosoftAuthenticatorAuthenticationMethodTarget';
import {serializeMicrosoftAuthenticatorFeatureSettings} from './serializeMicrosoftAuthenticatorFeatureSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration(microsoftAuthenticatorAuthenticationMethodConfiguration: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined = {} as MicrosoftAuthenticatorAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(microsoftAuthenticatorAuthenticationMethodConfiguration),
        "featureSettings": n => { microsoftAuthenticatorAuthenticationMethodConfiguration.featureSettings = n.getObjectValue<MicrosoftAuthenticatorFeatureSettings>(createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue); },
        "includeTargets": n => { microsoftAuthenticatorAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTarget>(createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue); },
        "isSoftwareOathEnabled": n => { microsoftAuthenticatorAuthenticationMethodConfiguration.isSoftwareOathEnabled = n.getBooleanValue(); },
    }
}
