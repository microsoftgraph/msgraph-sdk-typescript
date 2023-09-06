import { deserializeIntoUploadClientCertificatePostRequestBody } from './deserializeIntoUploadClientCertificatePostRequestBody';
import { type UploadClientCertificatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUploadClientCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUploadClientCertificatePostRequestBody;
}
