import {deserializeIntoRevokeSignInSessionsResponse} from './deserializeIntoRevokeSignInSessionsResponse';
import {RevokeSignInSessionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRevokeSignInSessionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRevokeSignInSessionsResponse;
}
