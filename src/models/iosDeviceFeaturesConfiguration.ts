import {AppleDeviceFeaturesConfigurationBase} from './appleDeviceFeaturesConfigurationBase';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {IosNotificationSettings} from './iosNotificationSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase, Parsable {
    /**
     * Asset tag information for the device, displayed on the login window and lock screen.
     */
    assetTagTemplate?: string | undefined;
    /**
     * A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
     */
    homeScreenDockIcons?: IosHomeScreenItem[] | undefined;
    /**
     * A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
     */
    homeScreenPages?: IosHomeScreenPage[] | undefined;
    /**
     * A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later.
     */
    lockScreenFootnote?: string | undefined;
    /**
     * Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This collection can contain a maximum of 500 elements.
     */
    notificationSettings?: IosNotificationSettings[] | undefined;
}
