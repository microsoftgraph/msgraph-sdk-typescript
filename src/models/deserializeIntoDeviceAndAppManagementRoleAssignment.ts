import { deserializeIntoRoleAssignment } from './deserializeIntoRoleAssignment';
import { type DeviceAndAppManagementRoleAssignment } from './deviceAndAppManagementRoleAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleAssignment(deviceAndAppManagementRoleAssignment: DeviceAndAppManagementRoleAssignment | undefined = {} as DeviceAndAppManagementRoleAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleAssignment(deviceAndAppManagementRoleAssignment),
        "members": n => { deviceAndAppManagementRoleAssignment.members = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
