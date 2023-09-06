import { createUserExperienceAnalyticsAutopilotDevicesSummaryFromDiscriminatorValue } from './createUserExperienceAnalyticsAutopilotDevicesSummaryFromDiscriminatorValue';
import { createUserExperienceAnalyticsCloudIdentityDevicesSummaryFromDiscriminatorValue } from './createUserExperienceAnalyticsCloudIdentityDevicesSummaryFromDiscriminatorValue';
import { createUserExperienceAnalyticsCloudManagementDevicesSummaryFromDiscriminatorValue } from './createUserExperienceAnalyticsCloudManagementDevicesSummaryFromDiscriminatorValue';
import { createUserExperienceAnalyticsWindows10DevicesSummaryFromDiscriminatorValue } from './createUserExperienceAnalyticsWindows10DevicesSummaryFromDiscriminatorValue';
import { serializeUserExperienceAnalyticsAutopilotDevicesSummary } from './serializeUserExperienceAnalyticsAutopilotDevicesSummary';
import { serializeUserExperienceAnalyticsCloudIdentityDevicesSummary } from './serializeUserExperienceAnalyticsCloudIdentityDevicesSummary';
import { serializeUserExperienceAnalyticsCloudManagementDevicesSummary } from './serializeUserExperienceAnalyticsCloudManagementDevicesSummary';
import { serializeUserExperienceAnalyticsWindows10DevicesSummary } from './serializeUserExperienceAnalyticsWindows10DevicesSummary';
import { type UserExperienceAnalyticsAutopilotDevicesSummary } from './userExperienceAnalyticsAutopilotDevicesSummary';
import { type UserExperienceAnalyticsCloudIdentityDevicesSummary } from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import { type UserExperienceAnalyticsCloudManagementDevicesSummary } from './userExperienceAnalyticsCloudManagementDevicesSummary';
import { type UserExperienceAnalyticsWindows10DevicesSummary } from './userExperienceAnalyticsWindows10DevicesSummary';
import { type UserExperienceAnalyticsWorkFromAnywhereDevicesSummary } from './userExperienceAnalyticsWorkFromAnywhereDevicesSummary';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevicesSummary(userExperienceAnalyticsWorkFromAnywhereDevicesSummary: UserExperienceAnalyticsWorkFromAnywhereDevicesSummary | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDevicesSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "autopilotDevicesSummary": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.autopilotDevicesSummary = n.getObjectValue<UserExperienceAnalyticsAutopilotDevicesSummary>(createUserExperienceAnalyticsAutopilotDevicesSummaryFromDiscriminatorValue); },
        "cloudIdentityDevicesSummary": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.cloudIdentityDevicesSummary = n.getObjectValue<UserExperienceAnalyticsCloudIdentityDevicesSummary>(createUserExperienceAnalyticsCloudIdentityDevicesSummaryFromDiscriminatorValue); },
        "cloudManagementDevicesSummary": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.cloudManagementDevicesSummary = n.getObjectValue<UserExperienceAnalyticsCloudManagementDevicesSummary>(createUserExperienceAnalyticsCloudManagementDevicesSummaryFromDiscriminatorValue); },
        "coManagedDevices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.coManagedDevices = n.getNumberValue(); },
        "devicesNotAutopilotRegistered": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesNotAutopilotRegistered = n.getNumberValue(); },
        "devicesWithoutAutopilotProfileAssigned": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesWithoutAutopilotProfileAssigned = n.getNumberValue(); },
        "devicesWithoutCloudIdentity": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesWithoutCloudIdentity = n.getNumberValue(); },
        "intuneDevices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.intuneDevices = n.getNumberValue(); },
        "@odata.type": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.odataType = n.getStringValue(); },
        "tenantAttachDevices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.tenantAttachDevices = n.getNumberValue(); },
        "totalDevices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.totalDevices = n.getNumberValue(); },
        "unsupportedOSversionDevices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.unsupportedOSversionDevices = n.getNumberValue(); },
        "windows10Devices": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10Devices = n.getNumberValue(); },
        "windows10DevicesSummary": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10DevicesSummary = n.getObjectValue<UserExperienceAnalyticsWindows10DevicesSummary>(createUserExperienceAnalyticsWindows10DevicesSummaryFromDiscriminatorValue); },
        "windows10DevicesWithoutTenantAttach": n => { userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10DevicesWithoutTenantAttach = n.getNumberValue(); },
    }
}
