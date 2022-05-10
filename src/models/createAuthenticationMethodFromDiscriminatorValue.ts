import {AuthenticationMethodImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodImpl();
}
