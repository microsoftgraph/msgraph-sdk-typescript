import {Message} from '../../../../../../../../models/message';
import {serializeMessage} from '../../../../../../../../models/serializeMessage';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : void {
        writer.writeStringValue("comment", replyPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", replyPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(replyPostRequestBody.additionalData);
}
