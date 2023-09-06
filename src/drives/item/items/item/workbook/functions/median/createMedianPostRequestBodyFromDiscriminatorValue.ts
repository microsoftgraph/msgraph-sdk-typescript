import { deserializeIntoMedianPostRequestBody } from './deserializeIntoMedianPostRequestBody';
import { type MedianPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMedianPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMedianPostRequestBody;
}
