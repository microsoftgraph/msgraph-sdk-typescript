import {deserializeIntoOAuth2PermissionGrantCollectionResponse} from './deserializeIntoOAuth2PermissionGrantCollectionResponse';
import {OAuth2PermissionGrantCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOAuth2PermissionGrantCollectionResponse;
}
