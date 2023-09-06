import { type IosStoreAppAssignmentSettings } from './iosStoreAppAssignmentSettings';
import { serializeMobileAppAssignmentSettings } from './serializeMobileAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppAssignmentSettings(writer: SerializationWriter, iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {} as IosStoreAppAssignmentSettings) : void {
        serializeMobileAppAssignmentSettings(writer, iosStoreAppAssignmentSettings)
        writer.writeBooleanValue("isRemovable", iosStoreAppAssignmentSettings.isRemovable);
        writer.writeBooleanValue("uninstallOnDeviceRemoval", iosStoreAppAssignmentSettings.uninstallOnDeviceRemoval);
        writer.writeStringValue("vpnConfigurationId", iosStoreAppAssignmentSettings.vpnConfigurationId);
}
