import {RemoveKeyPostRequestBody} from './removeKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveKeyPostRequestBody(writer: SerializationWriter, removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {} as RemoveKeyPostRequestBody) : void {
        writer.writeStringValue("keyId", removeKeyPostRequestBody.keyId);
        writer.writeStringValue("proof", removeKeyPostRequestBody.proof);
        writer.writeAdditionalData(removeKeyPostRequestBody.additionalData);
}
