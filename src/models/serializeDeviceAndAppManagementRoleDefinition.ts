import type {DeviceAndAppManagementRoleDefinition} from './deviceAndAppManagementRoleDefinition';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleDefinition(writer: SerializationWriter, deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {} as DeviceAndAppManagementRoleDefinition) : void {
        serializeRoleDefinition(writer, deviceAndAppManagementRoleDefinition)
}
