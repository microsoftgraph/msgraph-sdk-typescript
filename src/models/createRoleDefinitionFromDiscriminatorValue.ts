import {DeviceAndAppManagementRoleDefinitionImpl, RoleDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceAndAppManagementRoleDefinition":
                    return new DeviceAndAppManagementRoleDefinitionImpl();
            }
        }
    }
    return new RoleDefinitionImpl();
}
