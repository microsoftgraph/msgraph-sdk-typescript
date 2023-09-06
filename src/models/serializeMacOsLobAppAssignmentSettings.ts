import { type MacOsLobAppAssignmentSettings } from './macOsLobAppAssignmentSettings';
import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOsLobAppAssignmentSettings(writer: SerializationWriter, macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {} as MacOsLobAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, macOsLobAppAssignmentSettings)
        writer.writeBooleanValue("uninstallOnDeviceRemoval", macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval);
}
