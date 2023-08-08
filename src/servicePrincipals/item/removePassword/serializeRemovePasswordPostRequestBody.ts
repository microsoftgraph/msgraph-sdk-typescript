import type {RemovePasswordPostRequestBody} from './removePasswordPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeRemovePasswordPostRequestBody(writer: SerializationWriter, removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {} as RemovePasswordPostRequestBody) : void {
        writer.writeGuidValue("keyId", removePasswordPostRequestBody.keyId);
        writer.writeAdditionalData(removePasswordPostRequestBody.additionalData);
}
