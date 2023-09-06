import { deserializeIntoCreatePostRequestBody } from './deserializeIntoCreatePostRequestBody';
import { type CreatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreatePostRequestBody;
}
