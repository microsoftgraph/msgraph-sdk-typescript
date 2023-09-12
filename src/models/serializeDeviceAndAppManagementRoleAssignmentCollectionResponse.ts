import { type DeviceAndAppManagementRoleAssignment } from './deviceAndAppManagementRoleAssignment';
import { type DeviceAndAppManagementRoleAssignmentCollectionResponse } from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceAndAppManagementRoleAssignment } from './serializeDeviceAndAppManagementRoleAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleAssignmentCollectionResponse(writer: SerializationWriter, deviceAndAppManagementRoleAssignmentCollectionResponse: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined = {} as DeviceAndAppManagementRoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceAndAppManagementRoleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>("value", deviceAndAppManagementRoleAssignmentCollectionResponse.value, serializeDeviceAndAppManagementRoleAssignment);
}
