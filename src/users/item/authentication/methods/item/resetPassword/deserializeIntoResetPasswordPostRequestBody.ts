import type {ResetPasswordPostRequestBody} from './resetPasswordPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasswordPostRequestBody(resetPasswordPostRequestBody: ResetPasswordPostRequestBody | undefined = {} as ResetPasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newPassword": n => { resetPasswordPostRequestBody.newPassword = n.getStringValue(); },
    }
}
