import {IosStoreAppAssignmentSettings} from './iosStoreAppAssignmentSettings';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppAssignmentSettings(writer: SerializationWriter, iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {} as IosStoreAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, iosStoreAppAssignmentSettings)
        writer.writeBooleanValue("isRemovable", iosStoreAppAssignmentSettings.isRemovable);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", iosStoreAppAssignmentSettings.uninstallOnDeviceRemoval);
        writer.writeStringValue("vpnConfigurationId", iosStoreAppAssignmentSettings.vpnConfigurationId);
}
