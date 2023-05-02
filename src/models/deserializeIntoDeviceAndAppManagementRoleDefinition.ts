import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {DeviceAndAppManagementRoleDefinition} from './deviceAndAppManagementRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementRoleDefinition(deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {} as DeviceAndAppManagementRoleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRoleDefinition(deviceAndAppManagementRoleDefinition),
    }
}
