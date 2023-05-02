import {deserializeIntoRoleManagement} from './deserializeIntoRoleManagement';
import {RoleManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoleManagement;
}
