import { type PasswordCredential } from '../../../models/passwordCredential';
import { serializePasswordCredential } from '../../../models/serializePasswordCredential';
import { type AddPasswordPostRequestBody } from './addPasswordPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddPasswordPostRequestBody(writer: SerializationWriter, addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {} as AddPasswordPostRequestBody) : void {
        writer.writeObjectValue<PasswordCredential>("passwordCredential", addPasswordPostRequestBody.passwordCredential, serializePasswordCredential);
        writer.writeAdditionalData(addPasswordPostRequestBody.additionalData);
}
