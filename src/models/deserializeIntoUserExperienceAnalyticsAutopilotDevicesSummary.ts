import { type UserExperienceAnalyticsAutopilotDevicesSummary } from './userExperienceAnalyticsAutopilotDevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAutopilotDevicesSummary(userExperienceAnalyticsAutopilotDevicesSummary: UserExperienceAnalyticsAutopilotDevicesSummary | undefined = {} as UserExperienceAnalyticsAutopilotDevicesSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "devicesNotAutopilotRegistered": n => { userExperienceAnalyticsAutopilotDevicesSummary.devicesNotAutopilotRegistered = n.getNumberValue(); },
        "devicesWithoutAutopilotProfileAssigned": n => { userExperienceAnalyticsAutopilotDevicesSummary.devicesWithoutAutopilotProfileAssigned = n.getNumberValue(); },
        "@odata.type": n => { userExperienceAnalyticsAutopilotDevicesSummary.odataType = n.getStringValue(); },
        "totalWindows10DevicesWithoutTenantAttached": n => { userExperienceAnalyticsAutopilotDevicesSummary.totalWindows10DevicesWithoutTenantAttached = n.getNumberValue(); },
    }
}
