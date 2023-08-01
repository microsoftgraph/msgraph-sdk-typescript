import type {PasswordResetResponse} from './passwordResetResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordResetResponse(passwordResetResponse: PasswordResetResponse | undefined = {} as PasswordResetResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "newPassword": n => { passwordResetResponse.newPassword = n.getStringValue(); },
        "@odata.type": n => { passwordResetResponse.odataType = n.getStringValue(); },
    }
}
