import { deserializeIntoCreateReplyPostRequestBody } from './deserializeIntoCreateReplyPostRequestBody';
import { type CreateReplyPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateReplyPostRequestBody;
}
