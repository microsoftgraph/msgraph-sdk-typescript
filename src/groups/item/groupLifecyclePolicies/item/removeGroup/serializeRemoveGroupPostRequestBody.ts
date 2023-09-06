import { type RemoveGroupPostRequestBody } from './removeGroupPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRemoveGroupPostRequestBody(writer: SerializationWriter, removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {} as RemoveGroupPostRequestBody) : void {
        writer.writeStringValue("groupId", removeGroupPostRequestBody.groupId);
        writer.writeAdditionalData(removeGroupPostRequestBody.additionalData);
}
