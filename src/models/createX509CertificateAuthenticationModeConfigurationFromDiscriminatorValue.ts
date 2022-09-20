import {X509CertificateAuthenticationModeConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateAuthenticationModeConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateAuthenticationModeConfiguration();
}
