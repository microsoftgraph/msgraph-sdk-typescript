import { type UserExperienceAnalyticsSettings } from './userExperienceAnalyticsSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsSettings(writer: SerializationWriter, userExperienceAnalyticsSettings: UserExperienceAnalyticsSettings | undefined = {} as UserExperienceAnalyticsSettings) : void {
        writer.writeBooleanValue("configurationManagerDataConnectorConfigured", userExperienceAnalyticsSettings.configurationManagerDataConnectorConfigured);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsSettings.odataType);
        writer.writeAdditionalData(userExperienceAnalyticsSettings.additionalData);
}
