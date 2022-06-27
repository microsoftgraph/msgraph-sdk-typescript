import {Pkcs12CertificateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pkcs12CertificateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pkcs12CertificateImpl();
}
