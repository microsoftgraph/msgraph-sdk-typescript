import {deserializeIntoDefaultUserRolePermissions} from './deserializeIntoDefaultUserRolePermissions';
import {DefaultUserRolePermissions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultUserRolePermissionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDefaultUserRolePermissions;
}
