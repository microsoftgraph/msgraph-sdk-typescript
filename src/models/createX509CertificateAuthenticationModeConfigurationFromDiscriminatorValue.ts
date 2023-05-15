import {deserializeIntoX509CertificateAuthenticationModeConfiguration} from './deserializeIntoX509CertificateAuthenticationModeConfiguration';
import {X509CertificateAuthenticationModeConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoX509CertificateAuthenticationModeConfiguration;
}
