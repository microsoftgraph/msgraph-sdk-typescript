import { deserializeIntoSelfSignedCertificate } from './deserializeIntoSelfSignedCertificate';
import { type SelfSignedCertificate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSelfSignedCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSelfSignedCertificate;
}
