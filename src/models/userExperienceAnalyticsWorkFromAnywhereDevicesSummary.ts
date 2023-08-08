import type {UserExperienceAnalyticsAutopilotDevicesSummary} from './userExperienceAnalyticsAutopilotDevicesSummary';
import type {UserExperienceAnalyticsCloudIdentityDevicesSummary} from './userExperienceAnalyticsCloudIdentityDevicesSummary';
import type {UserExperienceAnalyticsCloudManagementDevicesSummary} from './userExperienceAnalyticsCloudManagementDevicesSummary';
import type {UserExperienceAnalyticsWindows10DevicesSummary} from './userExperienceAnalyticsWindows10DevicesSummary';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereDevicesSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The user experience analytics work from anywhere Autopilot devices summary. Read-only.
     */
    autopilotDevicesSummary?: UserExperienceAnalyticsAutopilotDevicesSummary | undefined;
    /**
     * The user experience analytics work from anywhere Cloud Identity devices summary. Read-only.
     */
    cloudIdentityDevicesSummary?: UserExperienceAnalyticsCloudIdentityDevicesSummary | undefined;
    /**
     * The user experience analytics work from anywhere Cloud management devices summary. Read-only.
     */
    cloudManagementDevicesSummary?: UserExperienceAnalyticsCloudManagementDevicesSummary | undefined;
    /**
     * Total number of co-managed devices. Read-only. Valid values -2147483648 to 2147483647
     */
    coManagedDevices?: number | undefined;
    /**
     * The count of intune devices that are not autopilot registerd. Read-only. Valid values -2147483648 to 2147483647
     */
    devicesNotAutopilotRegistered?: number | undefined;
    /**
     * The count of intune devices not autopilot profile assigned. Read-only. Valid values -2147483648 to 2147483647
     */
    devicesWithoutAutopilotProfileAssigned?: number | undefined;
    /**
     * The count of devices that are not cloud identity. Read-only. Valid values -2147483648 to 2147483647
     */
    devicesWithoutCloudIdentity?: number | undefined;
    /**
     * The count of intune devices that are not autopilot registerd. Read-only. Valid values -2147483648 to 2147483647
     */
    intuneDevices?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total count of tenant attach devices. Read-only. Valid values -2147483648 to 2147483647
     */
    tenantAttachDevices?: number | undefined;
    /**
     * The total count of devices. Read-only. Valid values -2147483648 to 2147483647
     */
    totalDevices?: number | undefined;
    /**
     * The count of Windows 10 devices that have unsupported OS versions. Read-only. Valid values -2147483648 to 2147483647
     */
    unsupportedOSversionDevices?: number | undefined;
    /**
     * The count of windows 10 devices. Read-only. Valid values -2147483648 to 2147483647
     */
    windows10Devices?: number | undefined;
    /**
     * The user experience analytics work from anywhere Windows 10 devices summary. Read-only.
     */
    windows10DevicesSummary?: UserExperienceAnalyticsWindows10DevicesSummary | undefined;
    /**
     * The count of windows 10 devices that are Intune and co-managed. Read-only. Valid values -2147483648 to 2147483647
     */
    windows10DevicesWithoutTenantAttach?: number | undefined;
}
