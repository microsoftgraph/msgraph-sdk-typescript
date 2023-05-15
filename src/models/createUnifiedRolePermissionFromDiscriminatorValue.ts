import {deserializeIntoUnifiedRolePermission} from './deserializeIntoUnifiedRolePermission';
import {UnifiedRolePermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRolePermission;
}
