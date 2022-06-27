import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {MobileApp} from './mobileApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidStoreApp extends Partial<AdditionalDataHolder>, MobileApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Android app store URL. */
    appStoreUrl?: string | undefined;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    packageId?: string | undefined;
}
