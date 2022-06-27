import {IosLobAppAssignmentSettingsImpl, IosStoreAppAssignmentSettingsImpl, IosVppAppAssignmentSettingsImpl, MicrosoftStoreForBusinessAppAssignmentSettingsImpl, MobileAppAssignmentSettingsImpl, Win32LobAppAssignmentSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppAssignmentSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosLobAppAssignmentSettings":
                    return new IosLobAppAssignmentSettingsImpl();
                case "#microsoft.graph.iosStoreAppAssignmentSettings":
                    return new IosStoreAppAssignmentSettingsImpl();
                case "#microsoft.graph.iosVppAppAssignmentSettings":
                    return new IosVppAppAssignmentSettingsImpl();
                case "#microsoft.graph.microsoftStoreForBusinessAppAssignmentSettings":
                    return new MicrosoftStoreForBusinessAppAssignmentSettingsImpl();
                case "#microsoft.graph.win32LobAppAssignmentSettings":
                    return new Win32LobAppAssignmentSettingsImpl();
            }
        }
    }
    return new MobileAppAssignmentSettingsImpl();
}
