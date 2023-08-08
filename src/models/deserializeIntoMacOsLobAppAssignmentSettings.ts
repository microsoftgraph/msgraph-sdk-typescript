import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import type {MacOsLobAppAssignmentSettings} from './macOsLobAppAssignmentSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOsLobAppAssignmentSettings(macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {} as MacOsLobAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(macOsLobAppAssignmentSettings),
        "uninstallOnDeviceRemoval": n => { macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue(); },
    }
}
