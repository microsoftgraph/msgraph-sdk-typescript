import { type ResetPasswordPostRequestBody } from './resetPasswordPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResetPasswordPostRequestBody(writer: SerializationWriter, resetPasswordPostRequestBody: ResetPasswordPostRequestBody | undefined = {} as ResetPasswordPostRequestBody) : void {
        writer.writeStringValue("newPassword", resetPasswordPostRequestBody.newPassword);
        writer.writeAdditionalData(resetPasswordPostRequestBody.additionalData);
}
