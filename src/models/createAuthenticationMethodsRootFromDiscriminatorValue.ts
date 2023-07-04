import {deserializeIntoAuthenticationMethodsRoot} from './deserializeIntoAuthenticationMethodsRoot';
import {AuthenticationMethodsRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsRoot;
}
