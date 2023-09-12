import { deserializeIntoReplyPostRequestBody } from './deserializeIntoReplyPostRequestBody';
import { type ReplyPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReplyPostRequestBody;
}
