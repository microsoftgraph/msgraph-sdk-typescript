import { deserializeIntoAuthenticationStrengthUsage } from './deserializeIntoAuthenticationStrengthUsage';
import { type AuthenticationStrengthUsage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationStrengthUsage;
}
