import {MacOsLobAppAssignmentSettings} from './macOsLobAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOsLobAppAssignmentSettings(writer: SerializationWriter, macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {} as MacOsLobAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, macOsLobAppAssignmentSettings)
        writer.writeBooleanValue("uninstallOnDeviceRemoval", macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval);
}
