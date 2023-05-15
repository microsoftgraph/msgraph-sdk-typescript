import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {deserializeIntoEmailAuthenticationMethodConfiguration} from './deserializeIntoEmailAuthenticationMethodConfiguration';
import {deserializeIntoFido2AuthenticationMethodConfiguration} from './deserializeIntoFido2AuthenticationMethodConfiguration';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration';
import {deserializeIntoSmsAuthenticationMethodConfiguration} from './deserializeIntoSmsAuthenticationMethodConfiguration';
import {deserializeIntoSoftwareOathAuthenticationMethodConfiguration} from './deserializeIntoSoftwareOathAuthenticationMethodConfiguration';
import {deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration} from './deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration';
import {deserializeIntoVoiceAuthenticationMethodConfiguration} from './deserializeIntoVoiceAuthenticationMethodConfiguration';
import {deserializeIntoX509CertificateAuthenticationMethodConfiguration} from './deserializeIntoX509CertificateAuthenticationMethodConfiguration';
import {AuthenticationMethodConfiguration, EmailAuthenticationMethodConfiguration, Fido2AuthenticationMethodConfiguration, MicrosoftAuthenticatorAuthenticationMethodConfiguration, SmsAuthenticationMethodConfiguration, SoftwareOathAuthenticationMethodConfiguration, TemporaryAccessPassAuthenticationMethodConfiguration, VoiceAuthenticationMethodConfiguration, X509CertificateAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailAuthenticationMethodConfiguration":
                    return deserializeIntoEmailAuthenticationMethodConfiguration;
                case "#microsoft.graph.fido2AuthenticationMethodConfiguration":
                    return deserializeIntoFido2AuthenticationMethodConfiguration;
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodConfiguration;
                case "#microsoft.graph.smsAuthenticationMethodConfiguration":
                    return deserializeIntoSmsAuthenticationMethodConfiguration;
                case "#microsoft.graph.softwareOathAuthenticationMethodConfiguration":
                    return deserializeIntoSoftwareOathAuthenticationMethodConfiguration;
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethodConfiguration":
                    return deserializeIntoTemporaryAccessPassAuthenticationMethodConfiguration;
                case "#microsoft.graph.voiceAuthenticationMethodConfiguration":
                    return deserializeIntoVoiceAuthenticationMethodConfiguration;
                case "#microsoft.graph.x509CertificateAuthenticationMethodConfiguration":
                    return deserializeIntoX509CertificateAuthenticationMethodConfiguration;
            }
        }
    }
    return deserializeIntoAuthenticationMethodConfiguration;
}
