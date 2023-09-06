import { deserializeIntoError_TypePostRequestBody } from './deserializeIntoError_TypePostRequestBody';
import { type Error_TypePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createError_TypePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoError_TypePostRequestBody;
}
