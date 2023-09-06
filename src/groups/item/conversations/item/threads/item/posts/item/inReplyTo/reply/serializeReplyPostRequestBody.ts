import { type Post } from '../../../../../../../../../../models/post';
import { serializePost } from '../../../../../../../../../../models/serializePost';
import { type ReplyPostRequestBody } from './replyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : void {
        writer.writeObjectValue<Post>("post", replyPostRequestBody.post, serializePost);
        writer.writeAdditionalData(replyPostRequestBody.additionalData);
}
