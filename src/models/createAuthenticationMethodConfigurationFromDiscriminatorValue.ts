import {AuthenticationMethodConfigurationImpl, EmailAuthenticationMethodConfigurationImpl, Fido2AuthenticationMethodConfigurationImpl, MicrosoftAuthenticatorAuthenticationMethodConfigurationImpl, TemporaryAccessPassAuthenticationMethodConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailAuthenticationMethodConfiguration":
                    return new EmailAuthenticationMethodConfigurationImpl();
                case "#microsoft.graph.fido2AuthenticationMethodConfiguration":
                    return new Fido2AuthenticationMethodConfigurationImpl();
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration":
                    return new MicrosoftAuthenticatorAuthenticationMethodConfigurationImpl();
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethodConfiguration":
                    return new TemporaryAccessPassAuthenticationMethodConfigurationImpl();
            }
        }
    }
    return new AuthenticationMethodConfigurationImpl();
}
