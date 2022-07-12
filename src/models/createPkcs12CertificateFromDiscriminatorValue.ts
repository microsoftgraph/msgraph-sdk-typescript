import {Pkcs12Certificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Pkcs12Certificate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Pkcs12Certificate();
}
