import {IosLobAppAssignmentSettings, IosStoreAppAssignmentSettings, IosVppAppAssignmentSettings, MicrosoftStoreForBusinessAppAssignmentSettings, MobileAppAssignmentSettings, Win32LobAppAssignmentSettings} from './index';
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
                case "#microsoft.graph.microsoftStoreForBusinessAppAssignmentSettings":
                    return new MicrosoftStoreForBusinessAppAssignmentSettings();
                case "#microsoft.graph.win32LobAppAssignmentSettings":
                    return new Win32LobAppAssignmentSettings();
            }
        }
    }
    return new MobileAppAssignmentSettings();
}
