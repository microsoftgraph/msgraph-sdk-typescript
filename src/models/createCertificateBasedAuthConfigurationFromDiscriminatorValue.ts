import {CertificateBasedAuthConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateBasedAuthConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateBasedAuthConfigurationImpl();
}
