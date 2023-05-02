import {deserializeIntoRoleAssignment} from './deserializeIntoRoleAssignment';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleAssignment(deviceAndAppManagementRoleAssignment: DeviceAndAppManagementRoleAssignment | undefined = {} as DeviceAndAppManagementRoleAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleAssignment(deviceAndAppManagementRoleAssignment),
        "members": n => { deviceAndAppManagementRoleAssignment.members = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
