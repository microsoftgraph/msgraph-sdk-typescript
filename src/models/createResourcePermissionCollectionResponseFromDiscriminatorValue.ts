import {ResourcePermissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourcePermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourcePermissionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourcePermissionCollectionResponse();
}
