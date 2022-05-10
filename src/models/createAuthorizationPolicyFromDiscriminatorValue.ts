import {AuthorizationPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthorizationPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthorizationPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthorizationPolicyImpl();
}
