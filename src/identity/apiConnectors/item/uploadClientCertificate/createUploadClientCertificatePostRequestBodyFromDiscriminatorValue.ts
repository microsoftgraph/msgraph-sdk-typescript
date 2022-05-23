import {UploadClientCertificatePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadClientCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadClientCertificatePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadClientCertificatePostRequestBodyImpl();
}
