import type {RemoveGroupPostRequestBody} from './removeGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveGroupPostRequestBody(writer: SerializationWriter, removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {} as RemoveGroupPostRequestBody) : void {
        writer.writeStringValue("groupId", removeGroupPostRequestBody.groupId);
        writer.writeAdditionalData(removeGroupPostRequestBody.additionalData);
}
