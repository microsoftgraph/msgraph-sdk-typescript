import { deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse } from './deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse';
import { type DeviceAndAppManagementRoleAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse;
}
