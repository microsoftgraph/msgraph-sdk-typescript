import {deserializeIntoX509CertificateUserBinding} from './deserializeIntoX509CertificateUserBinding';
import {X509CertificateUserBinding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateUserBindingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoX509CertificateUserBinding;
}
