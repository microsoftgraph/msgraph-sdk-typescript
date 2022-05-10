import {DeviceAndAppManagementRoleAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleAssignmentCollectionResponseImpl();
}
