import {AuthenticationMethodCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodCollectionResponseImpl();
}
