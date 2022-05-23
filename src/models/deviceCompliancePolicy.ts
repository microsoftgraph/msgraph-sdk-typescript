import {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {Entity} from './entity';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';

export interface DeviceCompliancePolicy extends Entity{
    /** The collection of assignments for this compliance policy. */
    assignments?:DeviceCompliancePolicyAssignment[] | undefined;
    /** DateTime the object was created. */
    createdDateTime?:Date | undefined;
    /** Admin provided description of the Device Configuration. */
    description?:string | undefined;
    /** Compliance Setting State Device Summary */
    deviceSettingStateSummaries?:SettingStateDeviceSummary[] | undefined;
    /** List of DeviceComplianceDeviceStatus. */
    deviceStatuses?:DeviceComplianceDeviceStatus[] | undefined;
    /** Device compliance devices status overview */
    deviceStatusOverview?:DeviceComplianceDeviceOverview | undefined;
    /** Admin provided name of the device configuration. */
    displayName?:string | undefined;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?:Date | undefined;
    /** The list of scheduled action for this rule */
    scheduledActionsForRule?:DeviceComplianceScheduledActionForRule[] | undefined;
    /** List of DeviceComplianceUserStatus. */
    userStatuses?:DeviceComplianceUserStatus[] | undefined;
    /** Device compliance users status overview */
    userStatusOverview?:DeviceComplianceUserOverview | undefined;
    /** Version of the device configuration. */
    version?:number | undefined;
}
