import { deserializeIntoAuthorizationPolicy } from './deserializeIntoAuthorizationPolicy';
import { type AuthorizationPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthorizationPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthorizationPolicy;
}
