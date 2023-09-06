import { type UserExperienceAnalyticsSettings } from './userExperienceAnalyticsSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsSettings(userExperienceAnalyticsSettings: UserExperienceAnalyticsSettings | undefined = {} as UserExperienceAnalyticsSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "configurationManagerDataConnectorConfigured": n => { userExperienceAnalyticsSettings.configurationManagerDataConnectorConfigured = n.getBooleanValue(); },
        "@odata.type": n => { userExperienceAnalyticsSettings.odataType = n.getStringValue(); },
    }
}
