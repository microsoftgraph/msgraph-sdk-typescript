import type {Message} from '../../../../models/message';
import {serializeMessage} from '../../../../models/serializeMessage';
import type {ReplyAllPostRequestBody} from './replyAllPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyAllPostRequestBody(writer: SerializationWriter, replyAllPostRequestBody: ReplyAllPostRequestBody | undefined = {} as ReplyAllPostRequestBody) : void {
        writer.writeStringValue("comment", replyAllPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", replyAllPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(replyAllPostRequestBody.additionalData);
}
