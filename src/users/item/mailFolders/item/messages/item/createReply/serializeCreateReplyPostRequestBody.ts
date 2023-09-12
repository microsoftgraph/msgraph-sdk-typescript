import { type Message } from '../../../../../../../models/message';
import { serializeMessage } from '../../../../../../../models/serializeMessage';
import { type CreateReplyPostRequestBody } from './createReplyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateReplyPostRequestBody(writer: SerializationWriter, createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {} as CreateReplyPostRequestBody) : void {
        writer.writeStringValue("comment", createReplyPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", createReplyPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(createReplyPostRequestBody.additionalData);
}
