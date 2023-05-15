import {deserializeIntoPkcs12CertificateInformation} from './deserializeIntoPkcs12CertificateInformation';
import {Pkcs12CertificateInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPkcs12CertificateInformation;
}
