import { type DeviceConfigurationAssignment } from './deviceConfigurationAssignment';
import { type DeviceConfigurationDeviceOverview } from './deviceConfigurationDeviceOverview';
import { type DeviceConfigurationDeviceStatus } from './deviceConfigurationDeviceStatus';
import { type DeviceConfigurationUserOverview } from './deviceConfigurationUserOverview';
import { type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { type Entity } from './entity';
import { type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceConfiguration extends Entity, Parsable {
    /**
     * The list of assignments for the device configuration profile.
     */
    assignments?: DeviceConfigurationAssignment[] | undefined;
    /**
     * DateTime the object was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Admin provided description of the Device Configuration.
     */
    description?: string | undefined;
    /**
     * Device Configuration Setting State Device Summary
     */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /**
     * Device configuration installation status by device.
     */
    deviceStatuses?: DeviceConfigurationDeviceStatus[] | undefined;
    /**
     * Device Configuration devices status overview
     */
    deviceStatusOverview?: DeviceConfigurationDeviceOverview | undefined;
    /**
     * Admin provided name of the device configuration.
     */
    displayName?: string | undefined;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Device configuration installation status by user.
     */
    userStatuses?: DeviceConfigurationUserStatus[] | undefined;
    /**
     * Device Configuration users status overview
     */
    userStatusOverview?: DeviceConfigurationUserOverview | undefined;
    /**
     * Version of the device configuration.
     */
    version?: number | undefined;
}
