import {deserializeIntoUploadClientCertificatePostRequestBody} from './deserializeIntoUploadClientCertificatePostRequestBody';
import {UploadClientCertificatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadClientCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUploadClientCertificatePostRequestBody;
}
