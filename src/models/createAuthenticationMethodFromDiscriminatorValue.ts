import {AuthenticationMethod, Fido2AuthenticationMethod, MicrosoftAuthenticatorAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fido2AuthenticationMethod":
                    return new Fido2AuthenticationMethod();
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod":
                    return new MicrosoftAuthenticatorAuthenticationMethod();
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethod":
                    return new TemporaryAccessPassAuthenticationMethod();
                case "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod":
                    return new WindowsHelloForBusinessAuthenticationMethod();
            }
        }
    }
    return new AuthenticationMethod();
}
