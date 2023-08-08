import {createPostFromDiscriminatorValue} from '../../../../../../../models/createPostFromDiscriminatorValue';
import type {Post} from '../../../../../../../models/post';
import {serializePost} from '../../../../../../../models/serializePost';
import type {ReplyPostRequestBody} from './replyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReplyPostRequestBody(replyPostRequestBody: ReplyPostRequestBody | undefined = {} as ReplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "post": n => { replyPostRequestBody.post = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
    }
}
