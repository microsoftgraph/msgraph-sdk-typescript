import {Pkcs12CertificateInformationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateInformationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pkcs12CertificateInformationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pkcs12CertificateInformationCollectionResponse();
}
