import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MacOsLobAppAssignmentSettings} from './macOsLobAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOsLobAppAssignmentSettings(macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {} as MacOsLobAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(macOsLobAppAssignmentSettings),
        "uninstallOnDeviceRemoval": n => { macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue(); },
    }
}
