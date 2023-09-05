import { deserializeIntoConcatenatePostRequestBody } from './deserializeIntoConcatenatePostRequestBody';
import { type ConcatenatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConcatenatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConcatenatePostRequestBody;
}
