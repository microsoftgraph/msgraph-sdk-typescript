import { createDeviceComplianceDeviceOverviewFromDiscriminatorValue } from './createDeviceComplianceDeviceOverviewFromDiscriminatorValue';
import { createDeviceComplianceDeviceStatusFromDiscriminatorValue } from './createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import { createDeviceCompliancePolicyAssignmentFromDiscriminatorValue } from './createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import { createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue } from './createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import { createDeviceComplianceUserOverviewFromDiscriminatorValue } from './createDeviceComplianceUserOverviewFromDiscriminatorValue';
import { createDeviceComplianceUserStatusFromDiscriminatorValue } from './createDeviceComplianceUserStatusFromDiscriminatorValue';
import { createSettingStateDeviceSummaryFromDiscriminatorValue } from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceComplianceDeviceOverview } from './deviceComplianceDeviceOverview';
import { type DeviceComplianceDeviceStatus } from './deviceComplianceDeviceStatus';
import { type DeviceCompliancePolicy } from './deviceCompliancePolicy';
import { type DeviceCompliancePolicyAssignment } from './deviceCompliancePolicyAssignment';
import { type DeviceComplianceScheduledActionForRule } from './deviceComplianceScheduledActionForRule';
import { type DeviceComplianceUserOverview } from './deviceComplianceUserOverview';
import { type DeviceComplianceUserStatus } from './deviceComplianceUserStatus';
import { serializeDeviceComplianceDeviceOverview } from './serializeDeviceComplianceDeviceOverview';
import { serializeDeviceComplianceDeviceStatus } from './serializeDeviceComplianceDeviceStatus';
import { serializeDeviceCompliancePolicyAssignment } from './serializeDeviceCompliancePolicyAssignment';
import { serializeDeviceComplianceScheduledActionForRule } from './serializeDeviceComplianceScheduledActionForRule';
import { serializeDeviceComplianceUserOverview } from './serializeDeviceComplianceUserOverview';
import { serializeDeviceComplianceUserStatus } from './serializeDeviceComplianceUserStatus';
import { serializeSettingStateDeviceSummary } from './serializeSettingStateDeviceSummary';
import { type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicy(deviceCompliancePolicy: DeviceCompliancePolicy | undefined = {} as DeviceCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicy),
        "assignments": n => { deviceCompliancePolicy.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { deviceCompliancePolicy.createdDateTime = n.getDateValue(); },
        "description": n => { deviceCompliancePolicy.description = n.getStringValue(); },
        "deviceSettingStateSummaries": n => { deviceCompliancePolicy.deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
        "deviceStatuses": n => { deviceCompliancePolicy.deviceStatuses = n.getCollectionOfObjectValues<DeviceComplianceDeviceStatus>(createDeviceComplianceDeviceStatusFromDiscriminatorValue); },
        "deviceStatusOverview": n => { deviceCompliancePolicy.deviceStatusOverview = n.getObjectValue<DeviceComplianceDeviceOverview>(createDeviceComplianceDeviceOverviewFromDiscriminatorValue); },
        "displayName": n => { deviceCompliancePolicy.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { deviceCompliancePolicy.lastModifiedDateTime = n.getDateValue(); },
        "scheduledActionsForRule": n => { deviceCompliancePolicy.scheduledActionsForRule = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
        "userStatuses": n => { deviceCompliancePolicy.userStatuses = n.getCollectionOfObjectValues<DeviceComplianceUserStatus>(createDeviceComplianceUserStatusFromDiscriminatorValue); },
        "userStatusOverview": n => { deviceCompliancePolicy.userStatusOverview = n.getObjectValue<DeviceComplianceUserOverview>(createDeviceComplianceUserOverviewFromDiscriminatorValue); },
        "version": n => { deviceCompliancePolicy.version = n.getNumberValue(); },
    }
}
