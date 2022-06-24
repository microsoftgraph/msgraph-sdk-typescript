import {DeviceAndAppManagementRoleDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleDefinitionImpl();
}
