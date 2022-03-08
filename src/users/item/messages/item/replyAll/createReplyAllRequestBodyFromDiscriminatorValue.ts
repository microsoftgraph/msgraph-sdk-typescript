import {ReplyAllRequestBody} from './replyAllRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyAllRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyAllRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyAllRequestBody();
}
