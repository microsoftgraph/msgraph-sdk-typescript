import {PermissionCollectionResponse} from './permissionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionCollectionResponse();
}
