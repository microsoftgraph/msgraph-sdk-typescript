import {serializeUserExperienceAnalyticsAutopilotDevicesSummary} from './serializeUserExperienceAnalyticsAutopilotDevicesSummary';
import {serializeUserExperienceAnalyticsCloudIdentityDevicesSummary} from './serializeUserExperienceAnalyticsCloudIdentityDevicesSummary';
import {serializeUserExperienceAnalyticsCloudManagementDevicesSummary} from './serializeUserExperienceAnalyticsCloudManagementDevicesSummary';
import {serializeUserExperienceAnalyticsWindows10DevicesSummary} from './serializeUserExperienceAnalyticsWindows10DevicesSummary';
import type {UserExperienceAnalyticsAutopilotDevicesSummary} from './userExperienceAnalyticsAutopilotDevicesSummary';
import type {UserExperienceAnalyticsCloudIdentityDevicesSummary} from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import type {UserExperienceAnalyticsCloudManagementDevicesSummary} from './userExperienceAnalyticsCloudManagementDevicesSummary';
import type {UserExperienceAnalyticsWindows10DevicesSummary} from './userExperienceAnalyticsWindows10DevicesSummary';
import type {UserExperienceAnalyticsWorkFromAnywhereDevicesSummary} from './userExperienceAnalyticsWorkFromAnywhereDevicesSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereDevicesSummary(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereDevicesSummary: UserExperienceAnalyticsWorkFromAnywhereDevicesSummary | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDevicesSummary) : void {
        writer.writeObjectValue<UserExperienceAnalyticsAutopilotDevicesSummary>("autopilotDevicesSummary", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.autopilotDevicesSummary, serializeUserExperienceAnalyticsAutopilotDevicesSummary);
        writer.writeObjectValue<UserExperienceAnalyticsCloudIdentityDevicesSummary>("cloudIdentityDevicesSummary", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.cloudIdentityDevicesSummary, serializeUserExperienceAnalyticsCloudIdentityDevicesSummary);
        writer.writeObjectValue<UserExperienceAnalyticsCloudManagementDevicesSummary>("cloudManagementDevicesSummary", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.cloudManagementDevicesSummary, serializeUserExperienceAnalyticsCloudManagementDevicesSummary);
        writer.writeNumberValue("coManagedDevices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.coManagedDevices);
        writer.writeNumberValue("devicesNotAutopilotRegistered", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesNotAutopilotRegistered);
        writer.writeNumberValue("devicesWithoutAutopilotProfileAssigned", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesWithoutAutopilotProfileAssigned);
        writer.writeNumberValue("devicesWithoutCloudIdentity", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.devicesWithoutCloudIdentity);
        writer.writeNumberValue("intuneDevices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.intuneDevices);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.odataType);
        writer.writeNumberValue("tenantAttachDevices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.tenantAttachDevices);
        writer.writeNumberValue("totalDevices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.totalDevices);
        writer.writeNumberValue("unsupportedOSversionDevices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.unsupportedOSversionDevices);
        writer.writeNumberValue("windows10Devices", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10Devices);
        writer.writeObjectValue<UserExperienceAnalyticsWindows10DevicesSummary>("windows10DevicesSummary", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10DevicesSummary, serializeUserExperienceAnalyticsWindows10DevicesSummary);
        writer.writeNumberValue("windows10DevicesWithoutTenantAttach", userExperienceAnalyticsWorkFromAnywhereDevicesSummary.windows10DevicesWithoutTenantAttach);
        writer.writeAdditionalData(userExperienceAnalyticsWorkFromAnywhereDevicesSummary.additionalData);
}
