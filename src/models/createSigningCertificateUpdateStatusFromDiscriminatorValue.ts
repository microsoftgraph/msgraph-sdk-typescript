import { deserializeIntoSigningCertificateUpdateStatus } from './deserializeIntoSigningCertificateUpdateStatus';
import { type SigningCertificateUpdateStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSigningCertificateUpdateStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSigningCertificateUpdateStatus;
}
