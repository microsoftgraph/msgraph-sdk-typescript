import {AuthenticationMethodConfiguration, EmailAuthenticationMethodConfiguration, Fido2AuthenticationMethodConfiguration, MicrosoftAuthenticatorAuthenticationMethodConfiguration, TemporaryAccessPassAuthenticationMethodConfiguration, X509CertificateAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailAuthenticationMethodConfiguration":
                    return new EmailAuthenticationMethodConfiguration();
                case "#microsoft.graph.fido2AuthenticationMethodConfiguration":
                    return new Fido2AuthenticationMethodConfiguration();
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration":
                    return new MicrosoftAuthenticatorAuthenticationMethodConfiguration();
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethodConfiguration":
                    return new TemporaryAccessPassAuthenticationMethodConfiguration();
                case "#microsoft.graph.x509CertificateAuthenticationMethodConfiguration":
                    return new X509CertificateAuthenticationMethodConfiguration();
            }
        }
    }
    return new AuthenticationMethodConfiguration();
}
