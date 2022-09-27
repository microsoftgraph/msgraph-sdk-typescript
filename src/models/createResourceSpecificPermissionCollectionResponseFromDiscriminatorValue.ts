import {ResourceSpecificPermissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionCollectionResponse();
}
