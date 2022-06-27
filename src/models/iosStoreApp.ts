import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {MobileApp} from './mobileApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosStoreApp extends Partial<AdditionalDataHolder>, MobileApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple App Store URL */
    appStoreUrl?: string | undefined;
    /** The Identity Name. */
    bundleId?: string | undefined;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
}
