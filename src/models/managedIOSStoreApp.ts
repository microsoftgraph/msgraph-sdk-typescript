import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedApp} from './managedApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSStoreApp extends Partial<AdditionalDataHolder>, ManagedApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple AppStoreUrl. */
    appStoreUrl?: string | undefined;
    /** The app's Bundle ID. */
    bundleId?: string | undefined;
    /** Contains properties of the minimum operating system required for an iOS mobile app. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
}
