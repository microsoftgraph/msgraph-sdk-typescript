import {AuthenticationStrengthPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationStrengthPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationStrengthPolicyCollectionResponse();
}
