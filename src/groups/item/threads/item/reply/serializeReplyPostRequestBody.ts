import {Post} from '../../../../../models/post';
import {serializePost} from '../../../../../models/serializePost';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReplyPostRequestBody(writer: SerializationWriter, replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : void {
        writer.writeObjectValue<Post>("post", replyPostRequestBody.post, serializePost);
        writer.writeAdditionalData(replyPostRequestBody.additionalData);
}
