import { type IosLobAppAssignmentSettings } from './iosLobAppAssignmentSettings';
import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosLobAppAssignmentSettings(writer: SerializationWriter, iosLobAppAssignmentSettings: IosLobAppAssignmentSettings | undefined = {} as IosLobAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, iosLobAppAssignmentSettings)
        writer.writeBooleanValue("isRemovable", iosLobAppAssignmentSettings.isRemovable);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", iosLobAppAssignmentSettings.uninstallOnDeviceRemoval);
        writer.writeStringValue("vpnConfigurationId", iosLobAppAssignmentSettings.vpnConfigurationId);
}
