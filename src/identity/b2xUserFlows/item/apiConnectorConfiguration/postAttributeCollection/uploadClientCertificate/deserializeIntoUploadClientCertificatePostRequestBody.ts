import type {UploadClientCertificatePostRequestBody} from './uploadClientCertificatePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUploadClientCertificatePostRequestBody(uploadClientCertificatePostRequestBody: UploadClientCertificatePostRequestBody | undefined = {} as UploadClientCertificatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "password": n => { uploadClientCertificatePostRequestBody.password = n.getStringValue(); },
        "pkcs12Value": n => { uploadClientCertificatePostRequestBody.pkcs12Value = n.getStringValue(); },
    }
}
