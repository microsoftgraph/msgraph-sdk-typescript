import {CertificateAuthorityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateAuthorityFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateAuthorityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateAuthorityImpl();
}
