import {MobileContainedApp} from './mobileContainedApp';
import {MobileLobApp} from './mobileLobApp';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppX extends MobileLobApp, Parsable {
    /**
     * Contains properties for Windows architecture.
     */
    applicableArchitectures?: WindowsArchitecture | undefined;
    /**
     * Contains properties for Windows device type.
     */
    applicableDeviceTypes?: WindowsDeviceType | undefined;
    /**
     * The collection of contained apps in the committed mobileAppContent of a windowsUniversalAppX app.
     */
    committedContainedApps?: MobileContainedApp[] | undefined;
    /**
     * The Identity Name.
     */
    identityName?: string | undefined;
    /**
     * The Identity Publisher Hash.
     */
    identityPublisherHash?: string | undefined;
    /**
     * The Identity Resource Identifier.
     */
    identityResourceIdentifier?: string | undefined;
    /**
     * The identity version.
     */
    identityVersion?: string | undefined;
    /**
     * Whether or not the app is a bundle.
     */
    isBundle?: boolean | undefined;
    /**
     * The minimum operating system required for a Windows mobile app.
     */
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
}
