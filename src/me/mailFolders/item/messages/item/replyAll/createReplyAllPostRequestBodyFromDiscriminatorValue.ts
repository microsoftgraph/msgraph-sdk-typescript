import {deserializeIntoReplyAllPostRequestBody} from './deserializeIntoReplyAllPostRequestBody';
import {ReplyAllPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyAllPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReplyAllPostRequestBody;
}
