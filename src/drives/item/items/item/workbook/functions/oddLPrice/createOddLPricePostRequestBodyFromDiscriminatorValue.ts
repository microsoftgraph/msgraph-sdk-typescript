import { deserializeIntoOddLPricePostRequestBody } from './deserializeIntoOddLPricePostRequestBody';
import { type OddLPricePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOddLPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddLPricePostRequestBody;
}
