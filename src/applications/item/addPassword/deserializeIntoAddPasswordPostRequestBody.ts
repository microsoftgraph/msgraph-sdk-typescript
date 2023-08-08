import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import type {PasswordCredential} from '../../../models/passwordCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import type {AddPasswordPostRequestBody} from './addPasswordPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPasswordPostRequestBody(addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {} as AddPasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "passwordCredential": n => { addPasswordPostRequestBody.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
    }
}
