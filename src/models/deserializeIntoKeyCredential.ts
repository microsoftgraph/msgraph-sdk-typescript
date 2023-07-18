import {KeyCredential} from './keyCredential';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoKeyCredential(keyCredential: KeyCredential | undefined = {} as KeyCredential) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { keyCredential.customKeyIdentifier = n.getStringValue(); },
        "displayName": n => { keyCredential.displayName = n.getStringValue(); },
        "endDateTime": n => { keyCredential.endDateTime = n.getDateValue(); },
        "key": n => { keyCredential.key = n.getStringValue(); },
        "keyId": n => { keyCredential.keyId = n.getGuidValue(); },
        "@odata.type": n => { keyCredential.odataType = n.getStringValue(); },
        "startDateTime": n => { keyCredential.startDateTime = n.getDateValue(); },
        "type": n => { keyCredential.type = n.getStringValue(); },
        "usage": n => { keyCredential.usage = n.getStringValue(); },
    }
}
