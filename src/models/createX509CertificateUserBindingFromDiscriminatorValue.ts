import {X509CertificateUserBinding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateUserBindingFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateUserBinding {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateUserBinding();
}
