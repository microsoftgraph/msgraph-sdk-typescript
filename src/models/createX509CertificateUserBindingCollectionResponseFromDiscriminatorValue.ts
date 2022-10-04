import {X509CertificateUserBindingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateUserBindingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateUserBindingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateUserBindingCollectionResponse();
}
