import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorAuthenticationMethodCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorAuthenticationMethodCollectionResponseImpl();
}
