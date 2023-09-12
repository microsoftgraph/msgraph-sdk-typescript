import { type MacOSIncludedApp } from './macOSIncludedApp';
import { type MacOSMinimumOperatingSystem } from './macOSMinimumOperatingSystem';
import { type MobileLobApp } from './mobileLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MacOSDmgApp extends MobileLobApp, Parsable {
    /**
     * When TRUE, indicates that the app's version will NOT be used to detect if the app is installed on a device. When FALSE, indicates that the app's version will be used to detect if the app is installed on a device. Set this to true for apps that use a self update feature. The default value is FALSE.
     */
    ignoreVersionDetection?: boolean | undefined;
    /**
     * The list of .apps expected to be installed by the DMG (Apple Disk Image)
     */
    includedApps?: MacOSIncludedApp[] | undefined;
    /**
     * ComplexType macOSMinimumOperatingSystem that indicates the minimum operating system applicable for the application.
     */
    minimumSupportedOperatingSystem?: MacOSMinimumOperatingSystem | undefined;
    /**
     * The bundleId of the primary .app in the DMG (Apple Disk Image). This maps to the CFBundleIdentifier in the app's bundle configuration.
     */
    primaryBundleId?: string | undefined;
    /**
     * The version of the primary .app in the DMG (Apple Disk Image). This maps to the CFBundleShortVersion in the app's bundle configuration.
     */
    primaryBundleVersion?: string | undefined;
}
