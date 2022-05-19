import {UploadClientCertificatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadClientCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadClientCertificatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadClientCertificatePostRequestBody();
}
