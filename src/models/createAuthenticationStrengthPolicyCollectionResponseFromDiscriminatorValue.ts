import {deserializeIntoAuthenticationStrengthPolicyCollectionResponse} from './deserializeIntoAuthenticationStrengthPolicyCollectionResponse';
import {AuthenticationStrengthPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationStrengthPolicyCollectionResponse;
}
