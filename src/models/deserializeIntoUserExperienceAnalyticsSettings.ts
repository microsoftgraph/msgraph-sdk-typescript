import {UserExperienceAnalyticsSettings} from './userExperienceAnalyticsSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsSettings(userExperienceAnalyticsSettings: UserExperienceAnalyticsSettings | undefined = {} as UserExperienceAnalyticsSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "configurationManagerDataConnectorConfigured": n => { userExperienceAnalyticsSettings.configurationManagerDataConnectorConfigured = n.getBooleanValue(); },
        "@odata.type": n => { userExperienceAnalyticsSettings.odataType = n.getStringValue(); },
    }
}
