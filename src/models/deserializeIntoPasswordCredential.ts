import {PasswordCredential} from './passwordCredential';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoPasswordCredential(passwordCredential: PasswordCredential | undefined = {} as PasswordCredential) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { passwordCredential.customKeyIdentifier = n.getStringValue(); },
        "displayName": n => { passwordCredential.displayName = n.getStringValue(); },
        "endDateTime": n => { passwordCredential.endDateTime = n.getDateValue(); },
        "hint": n => { passwordCredential.hint = n.getStringValue(); },
        "keyId": n => { passwordCredential.keyId = n.getGuidValue(); },
        "@odata.type": n => { passwordCredential.odataType = n.getStringValue(); },
        "secretText": n => { passwordCredential.secretText = n.getStringValue(); },
        "startDateTime": n => { passwordCredential.startDateTime = n.getDateValue(); },
    }
}
