import { deserializeIntoEdatePostRequestBody } from './deserializeIntoEdatePostRequestBody';
import { type EdatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdatePostRequestBody;
}
