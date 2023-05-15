import {createKeyCredentialFromDiscriminatorValue} from '../../../models/createKeyCredentialFromDiscriminatorValue';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {KeyCredential} from '../../../models/keyCredential';
import {PasswordCredential} from '../../../models/passwordCredential';
import {serializeKeyCredential} from '../../../models/serializeKeyCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddKeyPostRequestBody} from './addKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddKeyPostRequestBody(addKeyPostRequestBody: AddKeyPostRequestBody | undefined = {} as AddKeyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredential": n => { addKeyPostRequestBody.keyCredential = n.getObjectValue<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
        "passwordCredential": n => { addKeyPostRequestBody.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
        "proof": n => { addKeyPostRequestBody.proof = n.getStringValue(); },
    }
}
