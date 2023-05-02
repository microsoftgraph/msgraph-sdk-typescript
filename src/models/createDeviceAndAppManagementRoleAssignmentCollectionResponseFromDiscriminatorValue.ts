import {deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse} from './deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse';
import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse;
}
