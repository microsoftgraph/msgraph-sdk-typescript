import {deserializeIntoAuthenticationStrengthPolicy} from './deserializeIntoAuthenticationStrengthPolicy';
import {AuthenticationStrengthPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationStrengthPolicy;
}
