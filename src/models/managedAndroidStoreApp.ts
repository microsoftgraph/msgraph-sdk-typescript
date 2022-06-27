import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {ManagedApp} from './managedApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidStoreApp extends Partial<AdditionalDataHolder>, ManagedApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Android AppStoreUrl. */
    appStoreUrl?: string | undefined;
    /** Contains properties for the minimum operating system required for an Android mobile app. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The app's package ID. */
    packageId?: string | undefined;
}
