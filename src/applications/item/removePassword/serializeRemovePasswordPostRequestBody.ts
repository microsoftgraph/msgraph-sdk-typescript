import {RemovePasswordPostRequestBody} from './removePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemovePasswordPostRequestBody(writer: SerializationWriter, removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {} as RemovePasswordPostRequestBody) : void {
        writer.writeStringValue("keyId", removePasswordPostRequestBody.keyId);
        writer.writeAdditionalData(removePasswordPostRequestBody.additionalData);
}
