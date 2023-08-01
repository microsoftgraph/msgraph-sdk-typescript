import type {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import type {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import type {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import type {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import type {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import type {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import type {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {serializeDeviceComplianceDeviceOverview} from './serializeDeviceComplianceDeviceOverview';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {serializeDeviceComplianceScheduledActionForRule} from './serializeDeviceComplianceScheduledActionForRule';
import {serializeDeviceComplianceUserOverview} from './serializeDeviceComplianceUserOverview';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import {serializeEntity} from './serializeEntity';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import type {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicy(writer: SerializationWriter, deviceCompliancePolicy: DeviceCompliancePolicy | undefined = {} as DeviceCompliancePolicy) : void {
        serializeEntity(writer, deviceCompliancePolicy)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("assignments", deviceCompliancePolicy.assignments, serializeDeviceCompliancePolicyAssignment);
        writer.writeDateValue("createdDateTime", deviceCompliancePolicy.createdDateTime);
        writer.writeStringValue("description", deviceCompliancePolicy.description);
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("deviceSettingStateSummaries", deviceCompliancePolicy.deviceSettingStateSummaries, serializeSettingStateDeviceSummary);
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatus>("deviceStatuses", deviceCompliancePolicy.deviceStatuses, serializeDeviceComplianceDeviceStatus);
        writer.writeObjectValue<DeviceComplianceDeviceOverview>("deviceStatusOverview", deviceCompliancePolicy.deviceStatusOverview, serializeDeviceComplianceDeviceOverview);
        writer.writeStringValue("displayName", deviceCompliancePolicy.displayName);
        writer.writeDateValue("lastModifiedDateTime", deviceCompliancePolicy.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("scheduledActionsForRule", deviceCompliancePolicy.scheduledActionsForRule, serializeDeviceComplianceScheduledActionForRule);
        writer.writeCollectionOfObjectValues<DeviceComplianceUserStatus>("userStatuses", deviceCompliancePolicy.userStatuses, serializeDeviceComplianceUserStatus);
        writer.writeObjectValue<DeviceComplianceUserOverview>("userStatusOverview", deviceCompliancePolicy.userStatusOverview, serializeDeviceComplianceUserOverview);
        writer.writeNumberValue("version", deviceCompliancePolicy.version);
}
