import {Entity} from './entity';
import {OperatingSystemUpgradeEligibility} from './operatingSystemUpgradeEligibility';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWorkFromAnywhereDevice extends Entity, Parsable {
    /**
     * When TRUE, indicates the intune device's autopilot profile is assigned. When FALSE, indicates it's not Assigned. Supports: $select, $OrderBy. Read-only.
     */
    autoPilotProfileAssigned?: boolean | undefined;
    /**
     * When TRUE, indicates the intune device's autopilot is registered. When FALSE, indicates it's not registered. Supports: $select, $OrderBy. Read-only.
     */
    autoPilotRegistered?: boolean | undefined;
    /**
     * The Azure Active Directory (Azure AD) device Id. Supports: $select, $OrderBy. Read-only.
     */
    azureAdDeviceId?: string | undefined;
    /**
     * The work from anywhere device's Azure Active Directory (Azure AD) join type. Supports: $select, $OrderBy. Read-only.
     */
    azureAdJoinType?: string | undefined;
    /**
     * When TRUE, indicates the device's Azure Active Directory (Azure AD) is registered. When False, indicates it's not registered. Supports: $select, $OrderBy. Read-only.
     */
    azureAdRegistered?: boolean | undefined;
    /**
     * Indicates per device cloud identity score. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudIdentityScore?: number | undefined;
    /**
     * Indicates per device cloud management score. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudManagementScore?: number | undefined;
    /**
     * Indicates per device cloud provisioning score. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    cloudProvisioningScore?: number | undefined;
    /**
     * When TRUE, indicates the device's compliance policy is set to intune. When FALSE, indicates it's not set to intune. Supports: $select, $OrderBy. Read-only.
     */
    compliancePolicySetToIntune?: boolean | undefined;
    /**
     * The Intune device id of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceId?: string | undefined;
    /**
     * The name of the device. Supports: $select, $OrderBy. Read-only.
     */
    deviceName?: string | undefined;
    /**
     * The healthStatus property
     */
    healthStatus?: UserExperienceAnalyticsHealthState | undefined;
    /**
     * When TRUE, indicates the device's Cloud Management Gateway for Configuration Manager is enabled. When FALSE, indicates it's not enabled. Supports: $select, $OrderBy. Read-only.
     */
    isCloudManagedGatewayEnabled?: boolean | undefined;
    /**
     * The management agent of the device. Supports: $select, $OrderBy. Read-only.
     */
    managedBy?: string | undefined;
    /**
     * The manufacturer name of the device. Supports: $select, $OrderBy. Read-only.
     */
    manufacturer?: string | undefined;
    /**
     * The model name of the device. Supports: $select, $OrderBy. Read-only.
     */
    model?: string | undefined;
    /**
     * When TRUE, indicates OS check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    osCheckFailed?: boolean | undefined;
    /**
     * The OS description of the device. Supports: $select, $OrderBy. Read-only.
     */
    osDescription?: string | undefined;
    /**
     * The OS version of the device. Supports: $select, $OrderBy. Read-only.
     */
    osVersion?: string | undefined;
    /**
     * When TRUE, indicates the device's other workloads is set to intune. When FALSE, indicates it's not set to intune. Supports: $select, $OrderBy. Read-only.
     */
    otherWorkloadsSetToIntune?: boolean | undefined;
    /**
     * Ownership of the device. Supports: $select, $OrderBy. Read-only.
     */
    ownership?: string | undefined;
    /**
     * When TRUE, indicates processor hardware 64-bit architecture check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    processor64BitCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates processor hardware core count check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    processorCoreCountCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates processor hardware family check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    processorFamilyCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates processor hardware speed check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    processorSpeedCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates RAM hardware check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    ramCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates secure boot hardware check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    secureBootCheckFailed?: boolean | undefined;
    /**
     * The serial number of the device. Supports: $select, $OrderBy. Read-only.
     */
    serialNumber?: string | undefined;
    /**
     * When TRUE, indicates storage hardware check failed for device to upgrade to the latest version of windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    storageCheckFailed?: boolean | undefined;
    /**
     * When TRUE, indicates the device is Tenant Attached. When FALSE, indicates it's not Tenant Attached. Supports: $select, $OrderBy. Read-only.
     */
    tenantAttached?: boolean | undefined;
    /**
     * When TRUE, indicates Trusted Platform Module (TPM) hardware check failed for device to the latest version of upgrade to windows. When FALSE, indicates the check succeeded. Supports: $select, $OrderBy. Read-only.
     */
    tpmCheckFailed?: boolean | undefined;
    /**
     * Work From Anywhere windows device upgrade eligibility status.
     */
    upgradeEligibility?: OperatingSystemUpgradeEligibility | undefined;
    /**
     * Indicates per device windows score. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    windowsScore?: number | undefined;
    /**
     * Indicates work from anywhere per device overall score. Valid values 0 to 100. Value -1 means associated score is unavailable. Supports: $select, $OrderBy. Read-only. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    workFromAnywhereScore?: number | undefined;
}
