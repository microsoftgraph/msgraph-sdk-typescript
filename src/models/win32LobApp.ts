import {MobileLobApp} from './mobileLobApp';
import {Win32LobAppInstallExperience} from './win32LobAppInstallExperience';
import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppRule} from './win32LobAppRule';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobApp extends MobileLobApp, Parsable {
    /**
     * Contains properties for Windows architecture.
     */
    applicableArchitectures?: WindowsArchitecture | undefined;
    /**
     * The command line to install this app
     */
    installCommandLine?: string | undefined;
    /**
     * The install experience for this app.
     */
    installExperience?: Win32LobAppInstallExperience | undefined;
    /**
     * The value for the minimum CPU speed which is required to install this app.
     */
    minimumCpuSpeedInMHz?: number | undefined;
    /**
     * The value for the minimum free disk space which is required to install this app.
     */
    minimumFreeDiskSpaceInMB?: number | undefined;
    /**
     * The value for the minimum physical memory which is required to install this app.
     */
    minimumMemoryInMB?: number | undefined;
    /**
     * The value for the minimum number of processors which is required to install this app.
     */
    minimumNumberOfProcessors?: number | undefined;
    /**
     * The value for the minimum supported windows release.
     */
    minimumSupportedWindowsRelease?: string | undefined;
    /**
     * The MSI details if this Win32 app is an MSI app.
     */
    msiInformation?: Win32LobAppMsiInformation | undefined;
    /**
     * The return codes for post installation behavior.
     */
    returnCodes?: Win32LobAppReturnCode[] | undefined;
    /**
     * The detection and requirement rules for this app.
     */
    rules?: Win32LobAppRule[] | undefined;
    /**
     * The relative path of the setup file in the encrypted Win32LobApp package.
     */
    setupFilePath?: string | undefined;
    /**
     * The command line to uninstall this app
     */
    uninstallCommandLine?: string | undefined;
}
