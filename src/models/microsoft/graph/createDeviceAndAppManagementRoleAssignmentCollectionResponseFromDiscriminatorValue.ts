import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleAssignmentCollectionResponse();
}
