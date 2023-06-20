import {DeviceAndAppManagementRoleDefinition} from './deviceAndAppManagementRoleDefinition';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementRoleDefinition(deviceAndAppManagementRoleDefinition: DeviceAndAppManagementRoleDefinition | undefined = {} as DeviceAndAppManagementRoleDefinition, writer: SerializationWriter) : void {
        serializeRoleDefinition(writer, deviceAndAppManagementRoleDefinition)
}
