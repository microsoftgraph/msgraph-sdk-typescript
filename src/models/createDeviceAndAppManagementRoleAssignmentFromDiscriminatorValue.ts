import {DeviceAndAppManagementRoleAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleAssignmentImpl();
}
