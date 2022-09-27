import {RolePermissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRolePermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RolePermissionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RolePermissionCollectionResponse();
}
