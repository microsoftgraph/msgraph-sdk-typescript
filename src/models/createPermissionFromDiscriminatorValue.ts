import { deserializeIntoPermission } from './deserializeIntoPermission';
import { type Permission } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermission;
}
