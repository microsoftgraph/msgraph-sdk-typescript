import {deserializeIntoDeviceAndAppManagementRoleDefinition} from './deserializeIntoDeviceAndAppManagementRoleDefinition';
import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {DeviceAndAppManagementRoleDefinition, RoleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceAndAppManagementRoleDefinition":
                    return deserializeIntoDeviceAndAppManagementRoleDefinition;
            }
        }
    }
    return deserializeIntoRoleDefinition;
}
