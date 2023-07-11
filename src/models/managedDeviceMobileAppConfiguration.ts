import {Entity} from './entity';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfiguration extends Entity, Parsable {
    /**
     * The list of group assignemenets for app configration.
     */
    assignments?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
    /**
     * DateTime the object was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Admin provided description of the Device Configuration.
     */
    description?: string | undefined;
    /**
     * List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     */
    deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
    /**
     * App configuration device status summary.
     */
    deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined;
    /**
     * Admin provided name of the device configuration.
     */
    displayName?: string | undefined;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * the associated app.
     */
    targetedMobileApps?: string[] | undefined;
    /**
     * List of ManagedDeviceMobileAppConfigurationUserStatus.
     */
    userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
    /**
     * App configuration user status summary.
     */
    userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary | undefined;
    /**
     * Version of the device configuration.
     */
    version?: number | undefined;
}
