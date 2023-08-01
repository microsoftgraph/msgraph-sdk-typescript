import {createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue} from './createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import type {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import {serializeDeviceAndAppManagementRoleAssignment} from './serializeDeviceAndAppManagementRoleAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleAssignmentCollectionResponse(deviceAndAppManagementRoleAssignmentCollectionResponse: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined = {} as DeviceAndAppManagementRoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceAndAppManagementRoleAssignmentCollectionResponse),
        "value": n => { deviceAndAppManagementRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<DeviceAndAppManagementRoleAssignment>(createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue); },
    }
}
