import {Pkcs12CertificateInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pkcs12CertificateInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pkcs12CertificateInformation();
}
