import {PasswordCredential} from '../../../models/passwordCredential';
import {serializePasswordCredential} from '../../../models/serializePasswordCredential';
import {AddPasswordPostRequestBody} from './addPasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPasswordPostRequestBody(addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {} as AddPasswordPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<PasswordCredential>("passwordCredential", addPasswordPostRequestBody.passwordCredential, serializePasswordCredential);
        writer.writeAdditionalData(addPasswordPostRequestBody.additionalData);
}
