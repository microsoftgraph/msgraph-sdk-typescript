import type {Message} from '../../../../../../../models/message';
import {serializeMessage} from '../../../../../../../models/serializeMessage';
import type {ReplyPostRequestBody} from './replyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : void {
        writer.writeStringValue("comment", replyPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", replyPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(replyPostRequestBody.additionalData);
}
