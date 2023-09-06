import { deserializeIntoOAuth2PermissionGrantCollectionResponse } from './deserializeIntoOAuth2PermissionGrantCollectionResponse';
import { type OAuth2PermissionGrantCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOAuth2PermissionGrantCollectionResponse;
}
