import {createWin32LobAppInstallExperienceFromDiscriminatorValue} from './createWin32LobAppInstallExperienceFromDiscriminatorValue';
import {createWin32LobAppMsiInformationFromDiscriminatorValue} from './createWin32LobAppMsiInformationFromDiscriminatorValue';
import {createWin32LobAppReturnCodeFromDiscriminatorValue} from './createWin32LobAppReturnCodeFromDiscriminatorValue';
import {createWin32LobAppRuleFromDiscriminatorValue} from './createWin32LobAppRuleFromDiscriminatorValue';
import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
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

export function deserializeIntoWin32LobApp(win32LobApp: Win32LobApp | undefined = {} as Win32LobApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(win32LobApp),
        "applicableArchitectures": n => { win32LobApp.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
        "installCommandLine": n => { win32LobApp.installCommandLine = n.getStringValue(); },
        "installExperience": n => { win32LobApp.installExperience = n.getObjectValue<Win32LobAppInstallExperience>(createWin32LobAppInstallExperienceFromDiscriminatorValue); },
        "minimumCpuSpeedInMHz": n => { win32LobApp.minimumCpuSpeedInMHz = n.getNumberValue(); },
        "minimumFreeDiskSpaceInMB": n => { win32LobApp.minimumFreeDiskSpaceInMB = n.getNumberValue(); },
        "minimumMemoryInMB": n => { win32LobApp.minimumMemoryInMB = n.getNumberValue(); },
        "minimumNumberOfProcessors": n => { win32LobApp.minimumNumberOfProcessors = n.getNumberValue(); },
        "minimumSupportedWindowsRelease": n => { win32LobApp.minimumSupportedWindowsRelease = n.getStringValue(); },
        "msiInformation": n => { win32LobApp.msiInformation = n.getObjectValue<Win32LobAppMsiInformation>(createWin32LobAppMsiInformationFromDiscriminatorValue); },
        "returnCodes": n => { win32LobApp.returnCodes = n.getCollectionOfObjectValues<Win32LobAppReturnCode>(createWin32LobAppReturnCodeFromDiscriminatorValue); },
        "rules": n => { win32LobApp.rules = n.getCollectionOfObjectValues<Win32LobAppRule>(createWin32LobAppRuleFromDiscriminatorValue); },
        "setupFilePath": n => { win32LobApp.setupFilePath = n.getStringValue(); },
        "uninstallCommandLine": n => { win32LobApp.uninstallCommandLine = n.getStringValue(); },
    }
}
