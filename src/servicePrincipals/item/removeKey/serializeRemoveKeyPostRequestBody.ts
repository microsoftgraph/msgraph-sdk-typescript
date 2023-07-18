import {RemoveKeyPostRequestBody} from './removeKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeRemoveKeyPostRequestBody(writer: SerializationWriter, removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {} as RemoveKeyPostRequestBody) : void {
        writer.writeGuidValue("keyId", removeKeyPostRequestBody.keyId);
        writer.writeStringValue("proof", removeKeyPostRequestBody.proof);
        writer.writeAdditionalData(removeKeyPostRequestBody.additionalData);
}
