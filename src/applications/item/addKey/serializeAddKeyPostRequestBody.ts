import type {KeyCredential} from '../../../models/keyCredential';
import type {PasswordCredential} from '../../../models/passwordCredential';
import {serializeKeyCredential} from '../../../models/serializeKeyCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import type {AddKeyPostRequestBody} from './addKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddKeyPostRequestBody(writer: SerializationWriter, addKeyPostRequestBody: AddKeyPostRequestBody | undefined = {} as AddKeyPostRequestBody) : void {
        writer.writeObjectValue<KeyCredential>("keyCredential", addKeyPostRequestBody.keyCredential, serializeKeyCredential);
        writer.writeObjectValue<PasswordCredential>("passwordCredential", addKeyPostRequestBody.passwordCredential, serializePasswordCredential);
        writer.writeStringValue("proof", addKeyPostRequestBody.proof);
        writer.writeAdditionalData(addKeyPostRequestBody.additionalData);
}
