import { deserializeIntoCertificateBasedAuthConfiguration } from './deserializeIntoCertificateBasedAuthConfiguration';
import { type CertificateBasedAuthConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertificateBasedAuthConfiguration;
}
