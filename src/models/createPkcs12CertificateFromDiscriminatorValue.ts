import {deserializeIntoPkcs12Certificate} from './deserializeIntoPkcs12Certificate';
import {Pkcs12Certificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPkcs12Certificate;
}
