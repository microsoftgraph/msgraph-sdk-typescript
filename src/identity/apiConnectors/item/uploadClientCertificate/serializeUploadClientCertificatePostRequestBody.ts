import { type UploadClientCertificatePostRequestBody } from './uploadClientCertificatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUploadClientCertificatePostRequestBody(writer: SerializationWriter, uploadClientCertificatePostRequestBody: UploadClientCertificatePostRequestBody | undefined = {} as UploadClientCertificatePostRequestBody) : void {
        writer.writeStringValue("password", uploadClientCertificatePostRequestBody.password);
        writer.writeStringValue("pkcs12Value", uploadClientCertificatePostRequestBody.pkcs12Value);
        writer.writeAdditionalData(uploadClientCertificatePostRequestBody.additionalData);
}
