import { deserializeIntoCreateReplyAllPostRequestBody } from './deserializeIntoCreateReplyAllPostRequestBody';
import { type CreateReplyAllPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateReplyAllPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateReplyAllPostRequestBody;
}
