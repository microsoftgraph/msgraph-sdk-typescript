import { deserializeIntoPermissionScope } from './deserializeIntoPermissionScope';
import { type PermissionScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPermissionScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionScope;
}
