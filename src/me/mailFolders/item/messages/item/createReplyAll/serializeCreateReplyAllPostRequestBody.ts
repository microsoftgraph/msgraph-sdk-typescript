import { type Message } from '../../../../../../models/message';
import { serializeMessage } from '../../../../../../models/serializeMessage';
import { type CreateReplyAllPostRequestBody } from './createReplyAllPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateReplyAllPostRequestBody(writer: SerializationWriter, createReplyAllPostRequestBody: CreateReplyAllPostRequestBody | undefined = {} as CreateReplyAllPostRequestBody) : void {
        writer.writeStringValue("comment", createReplyAllPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", createReplyAllPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(createReplyAllPostRequestBody.additionalData);
}
