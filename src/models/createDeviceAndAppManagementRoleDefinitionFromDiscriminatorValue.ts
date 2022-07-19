import {DeviceAndAppManagementRoleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleDefinition();
}
