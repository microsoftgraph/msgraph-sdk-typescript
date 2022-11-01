import {PermissionScopeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionScopeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionScopeCollectionResponse();
}
