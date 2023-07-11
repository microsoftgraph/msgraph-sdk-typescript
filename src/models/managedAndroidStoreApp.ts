import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {ManagedApp} from './managedApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidStoreApp extends ManagedApp, Parsable {
    /**
     * The Android AppStoreUrl.
     */
    appStoreUrl?: string | undefined;
    /**
     * Contains properties for the minimum operating system required for an Android mobile app.
     */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /**
     * The app's package ID.
     */
    packageId?: string | undefined;
}
