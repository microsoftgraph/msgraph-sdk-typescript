import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {MobileLobApp} from './mobileLobApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosLobApp extends MobileLobApp, Parsable {
    /**
     * Contains properties of the possible iOS device types the mobile app can run on.
     */
    applicableDeviceType?: IosDeviceType | undefined;
    /**
     * The build number of iOS Line of Business (LoB) app.
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
     * The version number of iOS Line of Business (LoB) app.
     */
    versionNumber?: string | undefined;
}
