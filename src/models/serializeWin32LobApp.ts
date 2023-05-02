import {serializeMobileLobApp} from './serializeMobileLobApp';
import {serializeWin32LobAppInstallExperience} from './serializeWin32LobAppInstallExperience';
import {serializeWin32LobAppMsiInformation} from './serializeWin32LobAppMsiInformation';
import {serializeWin32LobAppReturnCode} from './serializeWin32LobAppReturnCode';
import {serializeWin32LobAppRule} from './serializeWin32LobAppRule';
import {Win32LobApp} from './win32LobApp';
import {Win32LobAppInstallExperience} from './win32LobAppInstallExperience';
import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppRule} from './win32LobAppRule';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobApp(writer: SerializationWriter, win32LobApp: Win32LobApp | undefined = {} as Win32LobApp) : void {
        serializeMobileLobApp(writer, win32LobApp)
        writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", win32LobApp.applicableArchitectures);
        writer.writeStringValue("installCommandLine", win32LobApp.installCommandLine);
        writer.writeObjectValue<Win32LobAppInstallExperience>("installExperience", win32LobApp.installExperience, serializeWin32LobAppInstallExperience);
        writer.writeNumberValue("minimumCpuSpeedInMHz", win32LobApp.minimumCpuSpeedInMHz);
        writer.writeNumberValue("minimumFreeDiskSpaceInMB", win32LobApp.minimumFreeDiskSpaceInMB);
        writer.writeNumberValue("minimumMemoryInMB", win32LobApp.minimumMemoryInMB);
        writer.writeNumberValue("minimumNumberOfProcessors", win32LobApp.minimumNumberOfProcessors);
        writer.writeStringValue("minimumSupportedWindowsRelease", win32LobApp.minimumSupportedWindowsRelease);
        writer.writeObjectValue<Win32LobAppMsiInformation>("msiInformation", win32LobApp.msiInformation, serializeWin32LobAppMsiInformation);
        writer.writeCollectionOfObjectValues<Win32LobAppReturnCode>("returnCodes", win32LobApp.returnCodes, serializeWin32LobAppReturnCode);
        writer.writeCollectionOfObjectValues<Win32LobAppRule>("rules", win32LobApp.rules, serializeWin32LobAppRule);
        writer.writeStringValue("setupFilePath", win32LobApp.setupFilePath);
        writer.writeStringValue("uninstallCommandLine", win32LobApp.uninstallCommandLine);
}
