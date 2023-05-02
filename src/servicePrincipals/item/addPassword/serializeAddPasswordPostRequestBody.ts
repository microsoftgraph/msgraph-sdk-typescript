import {PasswordCredential} from '../../../models/passwordCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddPasswordPostRequestBody} from './addPasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPasswordPostRequestBody(writer: SerializationWriter, addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {} as AddPasswordPostRequestBody) : void {
        writer.writeObjectValue<PasswordCredential>("passwordCredential", addPasswordPostRequestBody.passwordCredential, serializePasswordCredential);
        writer.writeAdditionalData(addPasswordPostRequestBody.additionalData);
}
