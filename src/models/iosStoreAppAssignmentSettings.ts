import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * When TRUE, indicates that the app can be uninstalled by the user. When FALSE, indicates that the app cannot be uninstalled by the user. By default, this property is set to null which internally is treated as TRUE.
     */
    isRemovable?: boolean | undefined;
    /**
     * When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune. By default, property is set to null which internally is treated as TRUE.
     */
    uninstallOnDeviceRemoval?: boolean | undefined;
    /**
     * This is the unique identifier (Id) of the VPN Configuration to apply to the app.
     */
    vpnConfigurationId?: string | undefined;
}
