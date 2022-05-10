import {AuthenticationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationImpl();
}
