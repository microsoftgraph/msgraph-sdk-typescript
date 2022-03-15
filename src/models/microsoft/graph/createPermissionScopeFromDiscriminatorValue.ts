import {PermissionScope} from './permissionScope';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionScope();
}
