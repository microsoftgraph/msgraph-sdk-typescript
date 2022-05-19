import {ReplyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyPostRequestBody();
}
