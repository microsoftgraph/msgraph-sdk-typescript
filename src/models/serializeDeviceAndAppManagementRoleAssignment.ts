import { type DeviceAndAppManagementRoleAssignment } from './deviceAndAppManagementRoleAssignment';
import { serializeRoleAssignment } from './serializeRoleAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleAssignment(writer: SerializationWriter, deviceAndAppManagementRoleAssignment: DeviceAndAppManagementRoleAssignment | undefined = {} as DeviceAndAppManagementRoleAssignment) : void {
        serializeRoleAssignment(writer, deviceAndAppManagementRoleAssignment)
        writer.writeCollectionOfPrimitiveValues<string>("members", deviceAndAppManagementRoleAssignment.members);
}
