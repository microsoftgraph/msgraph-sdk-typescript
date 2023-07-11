import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOsLobAppAssignmentSettings extends MobileAppAssignmentSettings, Parsable {
    /**
     * When TRUE, indicates that the app should be uninstalled when the device is removed from Intune. When FALSE, indicates that the app will not be uninstalled when the device is removed from Intune.
     */
    uninstallOnDeviceRemoval?: boolean | undefined;
}
