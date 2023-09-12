import { deserializeIntoRoleDefinition } from './deserializeIntoRoleDefinition';
import { type DeviceAndAppManagementRoleDefinition } from './deviceAndAppManagementRoleDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleDefinition(deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {} as DeviceAndAppManagementRoleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleDefinition(deviceAndAppManagementRoleDefinition),
    }
}
