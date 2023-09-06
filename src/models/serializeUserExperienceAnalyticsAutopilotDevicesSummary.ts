import { type UserExperienceAnalyticsAutopilotDevicesSummary } from './userExperienceAnalyticsAutopilotDevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAutopilotDevicesSummary(writer: SerializationWriter, userExperienceAnalyticsAutopilotDevicesSummary: UserExperienceAnalyticsAutopilotDevicesSummary | undefined = {} as UserExperienceAnalyticsAutopilotDevicesSummary) : void {
        writer.writeNumberValue("devicesNotAutopilotRegistered", userExperienceAnalyticsAutopilotDevicesSummary.devicesNotAutopilotRegistered);
        writer.writeNumberValue("devicesWithoutAutopilotProfileAssigned", userExperienceAnalyticsAutopilotDevicesSummary.devicesWithoutAutopilotProfileAssigned);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsAutopilotDevicesSummary.odataType);
        writer.writeNumberValue("totalWindows10DevicesWithoutTenantAttached", userExperienceAnalyticsAutopilotDevicesSummary.totalWindows10DevicesWithoutTenantAttached);
        writer.writeAdditionalData(userExperienceAnalyticsAutopilotDevicesSummary.additionalData);
}
