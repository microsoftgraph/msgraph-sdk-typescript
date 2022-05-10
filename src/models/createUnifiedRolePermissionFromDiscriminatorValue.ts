import {UnifiedRolePermissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRolePermissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRolePermissionImpl();
}
