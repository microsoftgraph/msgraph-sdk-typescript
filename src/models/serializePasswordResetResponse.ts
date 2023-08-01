import type {PasswordResetResponse} from './passwordResetResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordResetResponse(writer: SerializationWriter, passwordResetResponse: PasswordResetResponse | undefined = {} as PasswordResetResponse) : void {
        writer.writeStringValue("newPassword", passwordResetResponse.newPassword);
        writer.writeStringValue("@odata.type", passwordResetResponse.odataType);
        writer.writeAdditionalData(passwordResetResponse.additionalData);
}
