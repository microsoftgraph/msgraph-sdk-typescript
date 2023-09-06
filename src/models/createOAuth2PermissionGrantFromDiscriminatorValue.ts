import { deserializeIntoOAuth2PermissionGrant } from './deserializeIntoOAuth2PermissionGrant';
import { type OAuth2PermissionGrant } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOAuth2PermissionGrant;
}
