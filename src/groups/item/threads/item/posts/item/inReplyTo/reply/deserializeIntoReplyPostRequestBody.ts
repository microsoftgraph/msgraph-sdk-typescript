import {createPostFromDiscriminatorValue} from '../../../../../../../../models/createPostFromDiscriminatorValue';
import {Post} from '../../../../../../../../models/post';
import {serializePost} from '../../../../../../../../models/serializePost';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "post": n => { replyPostRequestBody.post = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
    }
}
