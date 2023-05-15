import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceAndAppManagementRoleAssignment} from './serializeDeviceAndAppManagementRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleAssignmentCollectionResponse(writer: SerializationWriter, deviceAndAppManagementRoleAssignmentCollectionResponse: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined = {} as DeviceAndAppManagementRoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceAndAppManagementRoleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>("value", deviceAndAppManagementRoleAssignmentCollectionResponse.value, serializeDeviceAndAppManagementRoleAssignment);
}
