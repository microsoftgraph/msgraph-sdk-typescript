import { type ChangePasswordPostRequestBody } from './changePasswordPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChangePasswordPostRequestBody(writer: SerializationWriter, changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {} as ChangePasswordPostRequestBody) : void {
        writer.writeStringValue("currentPassword", changePasswordPostRequestBody.currentPassword);
        writer.writeStringValue("newPassword", changePasswordPostRequestBody.newPassword);
        writer.writeAdditionalData(changePasswordPostRequestBody.additionalData);
}
