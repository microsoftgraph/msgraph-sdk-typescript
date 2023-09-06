import { deserializeIntoCalculatePostRequestBody } from './deserializeIntoCalculatePostRequestBody';
import { type CalculatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCalculatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalculatePostRequestBody;
}
