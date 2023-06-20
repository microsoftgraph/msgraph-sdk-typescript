import {ChangePasswordPostRequestBody} from './changePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangePasswordPostRequestBody(changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {} as ChangePasswordPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("currentPassword", changePasswordPostRequestBody.currentPassword);
        writer.writeStringValue("newPassword", changePasswordPostRequestBody.newPassword);
        writer.writeAdditionalData(changePasswordPostRequestBody.additionalData);
}
