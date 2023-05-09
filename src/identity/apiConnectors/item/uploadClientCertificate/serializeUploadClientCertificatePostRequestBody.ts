import {UploadClientCertificatePostRequestBody} from './uploadClientCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUploadClientCertificatePostRequestBody(writer: SerializationWriter, uploadClientCertificatePostRequestBody: UploadClientCertificatePostRequestBody | undefined = {} as UploadClientCertificatePostRequestBody) : void {
        writer.writeStringValue("password", uploadClientCertificatePostRequestBody.password);
        writer.writeStringValue("pkcs12Value", uploadClientCertificatePostRequestBody.pkcs12Value);
        writer.writeAdditionalData(uploadClientCertificatePostRequestBody.additionalData);
}
