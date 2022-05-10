import {UploadClientCertificateRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadClientCertificateRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadClientCertificateRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadClientCertificateRequestBodyImpl();
}
