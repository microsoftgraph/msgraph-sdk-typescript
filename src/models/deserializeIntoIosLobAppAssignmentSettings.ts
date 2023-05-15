import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosLobAppAssignmentSettings} from './iosLobAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobAppAssignmentSettings(iosLobAppAssignmentSettings: IosLobAppAssignmentSettings | undefined = {} as IosLobAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosLobAppAssignmentSettings),
        "isRemovable": n => { iosLobAppAssignmentSettings.isRemovable = n.getBooleanValue(); },
        "uninstallOnDeviceRemoval": n => { iosLobAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue(); },
        "vpnConfigurationId": n => { iosLobAppAssignmentSettings.vpnConfigurationId = n.getStringValue(); },
    }
}
