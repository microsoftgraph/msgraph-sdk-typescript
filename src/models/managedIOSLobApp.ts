import type {IosDeviceType} from './iosDeviceType';
import type {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import type {ManagedMobileLobApp} from './managedMobileLobApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedIOSLobApp extends ManagedMobileLobApp, Parsable {
    /**
     * Contains properties of the possible iOS device types the mobile app can run on.
     */
    applicableDeviceType?: IosDeviceType | undefined;
    /**
     * The build number of managed iOS Line of Business (LoB) app.
     */
    buildNumber?: string | undefined;
    /**
     * The Identity Name.
     */
    bundleId?: string | undefined;
    /**
     * The expiration time.
     */
    expirationDateTime?: Date | undefined;
    /**
     * The value for the minimum applicable operating system.
     */
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /**
     * The version number of managed iOS Line of Business (LoB) app.
     */
    versionNumber?: string | undefined;
}
