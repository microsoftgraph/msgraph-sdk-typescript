import { type ResetPasswordPostRequestBody } from './resetPasswordPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasswordPostRequestBody(resetPasswordPostRequestBody: ResetPasswordPostRequestBody | undefined = {} as ResetPasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newPassword": n => { resetPasswordPostRequestBody.newPassword = n.getStringValue(); },
    }
}
