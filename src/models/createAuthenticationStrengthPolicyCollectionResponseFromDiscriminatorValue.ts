import { deserializeIntoAuthenticationStrengthPolicyCollectionResponse } from './deserializeIntoAuthenticationStrengthPolicyCollectionResponse';
import { type AuthenticationStrengthPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationStrengthPolicyCollectionResponse;
}
