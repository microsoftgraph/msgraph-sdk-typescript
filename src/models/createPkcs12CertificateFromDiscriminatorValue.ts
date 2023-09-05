import { deserializeIntoPkcs12Certificate } from './deserializeIntoPkcs12Certificate';
import { type Pkcs12Certificate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPkcs12CertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPkcs12Certificate;
}
