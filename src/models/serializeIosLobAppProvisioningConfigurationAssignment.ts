import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type IosLobAppProvisioningConfigurationAssignment } from './iosLobAppProvisioningConfigurationAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosLobAppProvisioningConfigurationAssignment(writer: SerializationWriter, iosLobAppProvisioningConfigurationAssignment: IosLobAppProvisioningConfigurationAssignment | undefined = {} as IosLobAppProvisioningConfigurationAssignment) : void {
        serializeEntity(writer, iosLobAppProvisioningConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", iosLobAppProvisioningConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
