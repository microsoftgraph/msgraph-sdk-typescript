import {SigningCertificateUpdateStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSigningCertificateUpdateStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : SigningCertificateUpdateStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SigningCertificateUpdateStatusImpl();
}
