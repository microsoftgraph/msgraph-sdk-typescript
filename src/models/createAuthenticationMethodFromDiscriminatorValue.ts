import {AuthenticationMethodImpl, Fido2AuthenticationMethodImpl, MicrosoftAuthenticatorAuthenticationMethodImpl, TemporaryAccessPassAuthenticationMethodImpl, WindowsHelloForBusinessAuthenticationMethodImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fido2AuthenticationMethod":
                    return new Fido2AuthenticationMethodImpl();
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod":
                    return new MicrosoftAuthenticatorAuthenticationMethodImpl();
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethod":
                    return new TemporaryAccessPassAuthenticationMethodImpl();
                case "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod":
                    return new WindowsHelloForBusinessAuthenticationMethodImpl();
            }
        }
    }
    return new AuthenticationMethodImpl();
}
