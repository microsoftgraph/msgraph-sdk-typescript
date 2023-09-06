import { type AddTokenSigningCertificatePostRequestBody } from './addTokenSigningCertificatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddTokenSigningCertificatePostRequestBody(writer: SerializationWriter, addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {} as AddTokenSigningCertificatePostRequestBody) : void {
        writer.writeStringValue("displayName", addTokenSigningCertificatePostRequestBody.displayName);
        writer.writeDateValue("endDateTime", addTokenSigningCertificatePostRequestBody.endDateTime);
        writer.writeAdditionalData(addTokenSigningCertificatePostRequestBody.additionalData);
}
