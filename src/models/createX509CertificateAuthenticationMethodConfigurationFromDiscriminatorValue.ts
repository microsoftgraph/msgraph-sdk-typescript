import {X509CertificateAuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateAuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateAuthenticationMethodConfiguration();
}
