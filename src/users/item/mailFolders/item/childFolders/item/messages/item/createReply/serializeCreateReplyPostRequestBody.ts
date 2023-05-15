import {Message} from '../../../../../../../../../models/message';
import {serializeMessage} from '../../../../../../../../../models/serializeMessage';
import {CreateReplyPostRequestBody} from './createReplyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateReplyPostRequestBody(writer: SerializationWriter, createReplyPostRequestBody: CreateReplyPostRequestBody | undefined = {} as CreateReplyPostRequestBody) : void {
        writer.writeStringValue("comment", createReplyPostRequestBody.comment);
        writer.writeObjectValue<Message>("message", createReplyPostRequestBody.message, serializeMessage);
        writer.writeAdditionalData(createReplyPostRequestBody.additionalData);
}
