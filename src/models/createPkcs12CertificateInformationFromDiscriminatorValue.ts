import {Pkcs12CertificateInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pkcs12CertificateInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pkcs12CertificateInformationImpl();
}
