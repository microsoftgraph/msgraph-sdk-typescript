import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedMobileLobApp} from './managedMobileLobApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSLobApp extends Partial<AdditionalDataHolder>, ManagedMobileLobApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    applicableDeviceType?: IosDeviceType | undefined;
    /** The build number of managed iOS Line of Business (LoB) app. */
    buildNumber?: string | undefined;
    /** The Identity Name. */
    bundleId?: string | undefined;
    /** The expiration time. */
    expirationDateTime?: Date | undefined;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /** The version number of managed iOS Line of Business (LoB) app. */
    versionNumber?: string | undefined;
}
