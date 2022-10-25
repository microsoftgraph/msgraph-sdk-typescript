import {CertificateAuthorityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateAuthorityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateAuthorityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateAuthorityCollectionResponse();
}
