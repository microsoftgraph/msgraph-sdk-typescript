import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {IosLobAppProvisioningConfigurationAssignment} from './iosLobAppProvisioningConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosLobAppProvisioningConfigurationAssignment(writer: SerializationWriter, iosLobAppProvisioningConfigurationAssignment: IosLobAppProvisioningConfigurationAssignment | undefined = {} as IosLobAppProvisioningConfigurationAssignment) : void {
        serializeEntity(writer, iosLobAppProvisioningConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", iosLobAppProvisioningConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
