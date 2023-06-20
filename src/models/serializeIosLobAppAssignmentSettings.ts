import {IosLobAppAssignmentSettings} from './iosLobAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosLobAppAssignmentSettings(iosLobAppAssignmentSettings: IosLobAppAssignmentSettings | undefined = {} as IosLobAppAssignmentSettings, writer: SerializationWriter) : void {
        serializeMobileAppAssignmentSettings(writer, iosLobAppAssignmentSettings)
        writer.writeBooleanValue("isRemovable", iosLobAppAssignmentSettings.isRemovable);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", iosLobAppAssignmentSettings.uninstallOnDeviceRemoval);
        writer.writeStringValue("vpnConfigurationId", iosLobAppAssignmentSettings.vpnConfigurationId);
}
