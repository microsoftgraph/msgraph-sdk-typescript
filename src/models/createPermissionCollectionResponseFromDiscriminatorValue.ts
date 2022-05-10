import {PermissionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionCollectionResponseImpl();
}
