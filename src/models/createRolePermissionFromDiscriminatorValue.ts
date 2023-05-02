import {deserializeIntoRolePermission} from './deserializeIntoRolePermission';
import {RolePermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRolePermission;
}
