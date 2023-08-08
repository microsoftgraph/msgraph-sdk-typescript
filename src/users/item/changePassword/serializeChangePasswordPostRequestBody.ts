import type {ChangePasswordPostRequestBody} from './changePasswordPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangePasswordPostRequestBody(writer: SerializationWriter, changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {} as ChangePasswordPostRequestBody) : void {
        writer.writeStringValue("currentPassword", changePasswordPostRequestBody.currentPassword);
        writer.writeStringValue("newPassword", changePasswordPostRequestBody.newPassword);
        writer.writeAdditionalData(changePasswordPostRequestBody.additionalData);
}
