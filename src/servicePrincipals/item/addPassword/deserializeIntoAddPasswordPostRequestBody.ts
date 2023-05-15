import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {PasswordCredential} from '../../../models/passwordCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddPasswordPostRequestBody} from './addPasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPasswordPostRequestBody(addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {} as AddPasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "passwordCredential": n => { addPasswordPostRequestBody.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
    }
}
