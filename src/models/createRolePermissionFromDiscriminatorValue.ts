import { deserializeIntoRolePermission } from './deserializeIntoRolePermission';
import { type RolePermission } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRolePermission;
}
