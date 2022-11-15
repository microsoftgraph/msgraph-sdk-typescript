import {AuthenticationMethodTargetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodTargetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodTargetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodTargetCollectionResponse();
}
