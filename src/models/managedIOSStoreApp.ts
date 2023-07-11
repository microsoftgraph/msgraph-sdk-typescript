import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedApp} from './managedApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSStoreApp extends ManagedApp, Parsable {
    /**
     * Contains properties of the possible iOS device types the mobile app can run on.
     */
    applicableDeviceType?: IosDeviceType | undefined;
    /**
     * The Apple AppStoreUrl.
     */
    appStoreUrl?: string | undefined;
    /**
     * The app's Bundle ID.
     */
    bundleId?: string | undefined;
    /**
     * Contains properties of the minimum operating system required for an iOS mobile app.
     */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
}
