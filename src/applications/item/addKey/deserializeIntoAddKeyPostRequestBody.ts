import { createKeyCredentialFromDiscriminatorValue } from '../../../models/createKeyCredentialFromDiscriminatorValue';
import { createPasswordCredentialFromDiscriminatorValue } from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import { type KeyCredential } from '../../../models/keyCredential';
import { type PasswordCredential } from '../../../models/passwordCredential';
import { serializeKeyCredential } from '../../../models/serializeKeyCredential';
import { serializePasswordCredential } from '../../../models/serializePasswordCredential';
import { type AddKeyPostRequestBody } from './addKeyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddKeyPostRequestBody(addKeyPostRequestBody: AddKeyPostRequestBody | undefined = {} as AddKeyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredential": n => { addKeyPostRequestBody.keyCredential = n.getObjectValue<KeyCredential>(createKeyCredentialFromDiscriminatorValue); },
        "passwordCredential": n => { addKeyPostRequestBody.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
        "proof": n => { addKeyPostRequestBody.proof = n.getStringValue(); },
    }
}
