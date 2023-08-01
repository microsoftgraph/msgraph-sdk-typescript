import type {ChangePasswordPostRequestBody} from './changePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangePasswordPostRequestBody(changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {} as ChangePasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "currentPassword": n => { changePasswordPostRequestBody.currentPassword = n.getStringValue(); },
        "newPassword": n => { changePasswordPostRequestBody.newPassword = n.getStringValue(); },
    }
}
