import {RolePermissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RolePermissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RolePermissionImpl();
}
