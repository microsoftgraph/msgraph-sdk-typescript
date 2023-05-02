import {deserializeIntoCertificateAuthority} from './deserializeIntoCertificateAuthority';
import {CertificateAuthority} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateAuthorityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertificateAuthority;
}
