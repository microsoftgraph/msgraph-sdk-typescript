import {AuthenticationMethod, EmailAuthenticationMethod, Fido2AuthenticationMethod, MicrosoftAuthenticatorAuthenticationMethod, PasswordAuthenticationMethod, PhoneAuthenticationMethod, SoftwareOathAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailAuthenticationMethod":
                    return new EmailAuthenticationMethod();
                case "#microsoft.graph.fido2AuthenticationMethod":
                    return new Fido2AuthenticationMethod();
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod":
                    return new MicrosoftAuthenticatorAuthenticationMethod();
                case "#microsoft.graph.passwordAuthenticationMethod":
                    return new PasswordAuthenticationMethod();
                case "#microsoft.graph.phoneAuthenticationMethod":
                    return new PhoneAuthenticationMethod();
                case "#microsoft.graph.softwareOathAuthenticationMethod":
                    return new SoftwareOathAuthenticationMethod();
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethod":
                    return new TemporaryAccessPassAuthenticationMethod();
                case "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod":
                    return new WindowsHelloForBusinessAuthenticationMethod();
            }
        }
    }
    return new AuthenticationMethod();
}
