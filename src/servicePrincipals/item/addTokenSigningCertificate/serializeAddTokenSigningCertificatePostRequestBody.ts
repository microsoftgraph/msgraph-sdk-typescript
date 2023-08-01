import type {AddTokenSigningCertificatePostRequestBody} from './addTokenSigningCertificatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddTokenSigningCertificatePostRequestBody(writer: SerializationWriter, addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {} as AddTokenSigningCertificatePostRequestBody) : void {
        writer.writeStringValue("displayName", addTokenSigningCertificatePostRequestBody.displayName);
        writer.writeDateValue("endDateTime", addTokenSigningCertificatePostRequestBody.endDateTime);
        writer.writeAdditionalData(addTokenSigningCertificatePostRequestBody.additionalData);
}
