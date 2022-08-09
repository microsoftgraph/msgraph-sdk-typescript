import {DeviceAndAppManagementRoleAssignment, RoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceAndAppManagementRoleAssignment":
                    return new DeviceAndAppManagementRoleAssignment();
            }
        }
    }
    return new RoleAssignment();
}
