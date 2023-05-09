import {deserializeIntoDeviceAndAppManagementRoleAssignment} from './deserializeIntoDeviceAndAppManagementRoleAssignment';
import {DeviceAndAppManagementRoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementRoleAssignment;
}
