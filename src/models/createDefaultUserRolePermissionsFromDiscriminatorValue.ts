import { deserializeIntoDefaultUserRolePermissions } from './deserializeIntoDefaultUserRolePermissions';
import { type DefaultUserRolePermissions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDefaultUserRolePermissionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDefaultUserRolePermissions;
}
