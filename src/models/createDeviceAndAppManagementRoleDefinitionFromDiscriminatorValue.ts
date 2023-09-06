import { deserializeIntoDeviceAndAppManagementRoleDefinition } from './deserializeIntoDeviceAndAppManagementRoleDefinition';
import { type DeviceAndAppManagementRoleDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceAndAppManagementRoleDefinition;
}
