import {UnifiedRolePermissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRolePermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRolePermissionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRolePermissionCollectionResponse();
}
