import type {DeviceConfiguration} from './deviceConfiguration';
import type {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import type {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import type {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import type {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import type {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {serializeDeviceConfigurationAssignment} from './serializeDeviceConfigurationAssignment';
import {serializeDeviceConfigurationDeviceOverview} from './serializeDeviceConfigurationDeviceOverview';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {serializeDeviceConfigurationUserOverview} from './serializeDeviceConfigurationUserOverview';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {serializeEntity} from './serializeEntity';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import type {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfiguration(writer: SerializationWriter, deviceConfiguration: DeviceConfiguration | undefined = {} as DeviceConfiguration) : void {
        serializeEntity(writer, deviceConfiguration)
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", deviceConfiguration.assignments, serializeDeviceConfigurationAssignment);
        writer.writeDateValue("createdDateTime", deviceConfiguration.createdDateTime);
        writer.writeStringValue("description", deviceConfiguration.description);
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("deviceSettingStateSummaries", deviceConfiguration.deviceSettingStateSummaries, serializeSettingStateDeviceSummary);
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatus>("deviceStatuses", deviceConfiguration.deviceStatuses, serializeDeviceConfigurationDeviceStatus);
        writer.writeObjectValue<DeviceConfigurationDeviceOverview>("deviceStatusOverview", deviceConfiguration.deviceStatusOverview, serializeDeviceConfigurationDeviceOverview);
        writer.writeStringValue("displayName", deviceConfiguration.displayName);
        writer.writeDateValue("lastModifiedDateTime", deviceConfiguration.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatus>("userStatuses", deviceConfiguration.userStatuses, serializeDeviceConfigurationUserStatus);
        writer.writeObjectValue<DeviceConfigurationUserOverview>("userStatusOverview", deviceConfiguration.userStatusOverview, serializeDeviceConfigurationUserOverview);
        writer.writeNumberValue("version", deviceConfiguration.version);
}
