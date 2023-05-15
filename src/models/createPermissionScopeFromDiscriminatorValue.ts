import {deserializeIntoPermissionScope} from './deserializeIntoPermissionScope';
import {PermissionScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionScope;
}
