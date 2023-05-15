import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from './createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {createDeviceConfigurationDeviceOverviewFromDiscriminatorValue} from './createDeviceConfigurationDeviceOverviewFromDiscriminatorValue';
import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from './createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {createDeviceConfigurationUserOverviewFromDiscriminatorValue} from './createDeviceConfigurationUserOverviewFromDiscriminatorValue';
import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from './createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {createSettingStateDeviceSummaryFromDiscriminatorValue} from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {serializeDeviceConfigurationAssignment} from './serializeDeviceConfigurationAssignment';
import {serializeDeviceConfigurationDeviceOverview} from './serializeDeviceConfigurationDeviceOverview';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {serializeDeviceConfigurationUserOverview} from './serializeDeviceConfigurationUserOverview';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfiguration(deviceConfiguration: DeviceConfiguration | undefined = {} as DeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfiguration),
        "assignments": n => { deviceConfiguration.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { deviceConfiguration.createdDateTime = n.getDateValue(); },
        "description": n => { deviceConfiguration.description = n.getStringValue(); },
        "deviceSettingStateSummaries": n => { deviceConfiguration.deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
        "deviceStatuses": n => { deviceConfiguration.deviceStatuses = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatus>(createDeviceConfigurationDeviceStatusFromDiscriminatorValue); },
        "deviceStatusOverview": n => { deviceConfiguration.deviceStatusOverview = n.getObjectValue<DeviceConfigurationDeviceOverview>(createDeviceConfigurationDeviceOverviewFromDiscriminatorValue); },
        "displayName": n => { deviceConfiguration.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { deviceConfiguration.lastModifiedDateTime = n.getDateValue(); },
        "userStatuses": n => { deviceConfiguration.userStatuses = n.getCollectionOfObjectValues<DeviceConfigurationUserStatus>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
        "userStatusOverview": n => { deviceConfiguration.userStatusOverview = n.getObjectValue<DeviceConfigurationUserOverview>(createDeviceConfigurationUserOverviewFromDiscriminatorValue); },
        "version": n => { deviceConfiguration.version = n.getNumberValue(); },
    }
}
