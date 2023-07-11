import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreApp extends MobileApp, Parsable {
    /**
     * Contains properties of the possible iOS device types the mobile app can run on.
     */
    applicableDeviceType?: IosDeviceType | undefined;
    /**
     * The Apple App Store URL
     */
    appStoreUrl?: string | undefined;
    /**
     * The Identity Name.
     */
    bundleId?: string | undefined;
    /**
     * The value for the minimum applicable operating system.
     */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
}
