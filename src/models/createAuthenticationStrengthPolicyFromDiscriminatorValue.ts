import {AuthenticationStrengthPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationStrengthPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationStrengthPolicy();
}
