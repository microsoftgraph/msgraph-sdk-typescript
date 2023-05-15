import {deserializeIntoIosLobAppAssignmentSettings} from './deserializeIntoIosLobAppAssignmentSettings';
import {deserializeIntoIosStoreAppAssignmentSettings} from './deserializeIntoIosStoreAppAssignmentSettings';
import {deserializeIntoIosVppAppAssignmentSettings} from './deserializeIntoIosVppAppAssignmentSettings';
import {deserializeIntoMacOsLobAppAssignmentSettings} from './deserializeIntoMacOsLobAppAssignmentSettings';
import {deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings} from './deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings';
import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {deserializeIntoWin32LobAppAssignmentSettings} from './deserializeIntoWin32LobAppAssignmentSettings';
import {deserializeIntoWindowsAppXAppAssignmentSettings} from './deserializeIntoWindowsAppXAppAssignmentSettings';
import {deserializeIntoWindowsUniversalAppXAppAssignmentSettings} from './deserializeIntoWindowsUniversalAppXAppAssignmentSettings';
import {IosLobAppAssignmentSettings, IosStoreAppAssignmentSettings, IosVppAppAssignmentSettings, MacOsLobAppAssignmentSettings, MicrosoftStoreForBusinessAppAssignmentSettings, MobileAppAssignmentSettings, Win32LobAppAssignmentSettings, WindowsAppXAppAssignmentSettings, WindowsUniversalAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosLobAppAssignmentSettings":
                    return deserializeIntoIosLobAppAssignmentSettings;
                case "#microsoft.graph.iosStoreAppAssignmentSettings":
                    return deserializeIntoIosStoreAppAssignmentSettings;
                case "#microsoft.graph.iosVppAppAssignmentSettings":
                    return deserializeIntoIosVppAppAssignmentSettings;
                case "#microsoft.graph.macOsLobAppAssignmentSettings":
                    return deserializeIntoMacOsLobAppAssignmentSettings;
                case "#microsoft.graph.microsoftStoreForBusinessAppAssignmentSettings":
                    return deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings;
                case "#microsoft.graph.win32LobAppAssignmentSettings":
                    return deserializeIntoWin32LobAppAssignmentSettings;
                case "#microsoft.graph.windowsAppXAppAssignmentSettings":
                    return deserializeIntoWindowsAppXAppAssignmentSettings;
                case "#microsoft.graph.windowsUniversalAppXAppAssignmentSettings":
                    return deserializeIntoWindowsUniversalAppXAppAssignmentSettings;
            }
        }
    }
    return deserializeIntoMobileAppAssignmentSettings;
}
