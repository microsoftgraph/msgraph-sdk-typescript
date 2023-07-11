import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {MobileApp} from './mobileApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidStoreApp extends MobileApp, Parsable {
    /**
     * The Android app store URL.
     */
    appStoreUrl?: string | undefined;
    /**
     * The value for the minimum applicable operating system.
     */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /**
     * The package identifier.
     */
    packageId?: string | undefined;
}
