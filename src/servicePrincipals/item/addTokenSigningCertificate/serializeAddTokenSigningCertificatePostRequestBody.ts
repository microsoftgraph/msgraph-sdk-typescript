import {AddTokenSigningCertificatePostRequestBody} from './addTokenSigningCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddTokenSigningCertificatePostRequestBody(addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {} as AddTokenSigningCertificatePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", addTokenSigningCertificatePostRequestBody.displayName);
        writer.writeDateValue("endDateTime", addTokenSigningCertificatePostRequestBody.endDateTime);
        writer.writeAdditionalData(addTokenSigningCertificatePostRequestBody.additionalData);
}
