import { deserializeIntoRatePostRequestBody } from './deserializeIntoRatePostRequestBody';
import { type RatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRatePostRequestBody;
}
