import { deserializeIntoX509CertificateAuthenticationModeConfiguration } from './deserializeIntoX509CertificateAuthenticationModeConfiguration';
import { type X509CertificateAuthenticationModeConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoX509CertificateAuthenticationModeConfiguration;
}
