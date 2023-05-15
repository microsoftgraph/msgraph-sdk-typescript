import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {serializeRoleAssignment} from './serializeRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleAssignment(writer: SerializationWriter, deviceAndAppManagementRoleAssignment: DeviceAndAppManagementRoleAssignment | undefined = {} as DeviceAndAppManagementRoleAssignment) : void {
        serializeRoleAssignment(writer, deviceAndAppManagementRoleAssignment)
        writer.writeCollectionOfPrimitiveValues<string>("members", deviceAndAppManagementRoleAssignment.members);
}
