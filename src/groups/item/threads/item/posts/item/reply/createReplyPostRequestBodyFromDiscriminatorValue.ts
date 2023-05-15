import {deserializeIntoReplyPostRequestBody} from './deserializeIntoReplyPostRequestBody';
import {ReplyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReplyPostRequestBody;
}
