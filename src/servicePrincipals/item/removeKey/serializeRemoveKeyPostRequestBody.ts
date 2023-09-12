import { type RemoveKeyPostRequestBody } from './removeKeyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeRemoveKeyPostRequestBody(writer: SerializationWriter, removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {} as RemoveKeyPostRequestBody) : void {
        writer.writeGuidValue("keyId", removeKeyPostRequestBody.keyId);
        writer.writeStringValue("proof", removeKeyPostRequestBody.proof);
        writer.writeAdditionalData(removeKeyPostRequestBody.additionalData);
}
