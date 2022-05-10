import {SigningCertificateUpdateStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSigningCertificateUpdateStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : SigningCertificateUpdateStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SigningCertificateUpdateStatus();
}
