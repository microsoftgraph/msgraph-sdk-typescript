import { deserializeIntoX509CertificateAuthenticationMethodConfiguration } from './deserializeIntoX509CertificateAuthenticationMethodConfiguration';
import { type X509CertificateAuthenticationMethodConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoX509CertificateAuthenticationMethodConfiguration;
}
