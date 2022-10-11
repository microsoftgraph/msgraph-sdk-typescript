import {DeviceAndAppManagementRoleDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleDefinitionCollectionResponse();
}
