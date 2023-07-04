import {UserExperienceAnalyticsSettings} from './userExperienceAnalyticsSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsSettings(writer: SerializationWriter, userExperienceAnalyticsSettings: UserExperienceAnalyticsSettings | undefined = {} as UserExperienceAnalyticsSettings) : void {
        writer.writeBooleanValue("configurationManagerDataConnectorConfigured", userExperienceAnalyticsSettings.configurationManagerDataConnectorConfigured);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsSettings.odataType);
        writer.writeAdditionalData(userExperienceAnalyticsSettings.additionalData);
}
