import {PermissionScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionScopeImpl();
}
