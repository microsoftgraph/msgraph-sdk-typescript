import {IosLobAppAssignmentSettings, IosStoreAppAssignmentSettings, IosVppAppAssignmentSettings, MacOsLobAppAssignmentSettings, MicrosoftStoreForBusinessAppAssignmentSettings, MobileAppAssignmentSettings, Win32LobAppAssignmentSettings, WindowsAppXAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosLobAppAssignmentSettings":
                    return new IosLobAppAssignmentSettings();
                case "#microsoft.graph.iosStoreAppAssignmentSettings":
                    return new IosStoreAppAssignmentSettings();
                case "#microsoft.graph.iosVppAppAssignmentSettings":
                    return new IosVppAppAssignmentSettings();
                case "#microsoft.graph.macOsLobAppAssignmentSettings":
                    return new MacOsLobAppAssignmentSettings();
                case "#microsoft.graph.microsoftStoreForBusinessAppAssignmentSettings":
                    return new MicrosoftStoreForBusinessAppAssignmentSettings();
                case "#microsoft.graph.win32LobAppAssignmentSettings":
                    return new Win32LobAppAssignmentSettings();
                case "#microsoft.graph.windowsAppXAppAssignmentSettings":
                    return new WindowsAppXAppAssignmentSettings();
            }
        }
    }
    return new MobileAppAssignmentSettings();
}
