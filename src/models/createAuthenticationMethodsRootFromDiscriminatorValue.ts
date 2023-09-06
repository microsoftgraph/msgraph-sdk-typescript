import { deserializeIntoAuthenticationMethodsRoot } from './deserializeIntoAuthenticationMethodsRoot';
import { type AuthenticationMethodsRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsRoot;
}
