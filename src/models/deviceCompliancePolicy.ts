import type {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import type {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import type {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import type {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import type {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import type {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import type {Entity} from './entity';
import type {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicy extends Entity, Parsable {
    /**
     * The collection of assignments for this compliance policy.
     */
    assignments?: DeviceCompliancePolicyAssignment[] | undefined;
    /**
     * DateTime the object was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Admin provided description of the Device Configuration.
     */
    description?: string | undefined;
    /**
     * Compliance Setting State Device Summary
     */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /**
     * List of DeviceComplianceDeviceStatus.
     */
    deviceStatuses?: DeviceComplianceDeviceStatus[] | undefined;
    /**
     * Device compliance devices status overview
     */
    deviceStatusOverview?: DeviceComplianceDeviceOverview | undefined;
    /**
     * Admin provided name of the device configuration.
     */
    displayName?: string | undefined;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
     */
    scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[] | undefined;
    /**
     * List of DeviceComplianceUserStatus.
     */
    userStatuses?: DeviceComplianceUserStatus[] | undefined;
    /**
     * Device compliance users status overview
     */
    userStatusOverview?: DeviceComplianceUserOverview | undefined;
    /**
     * Version of the device configuration.
     */
    version?: number | undefined;
}
