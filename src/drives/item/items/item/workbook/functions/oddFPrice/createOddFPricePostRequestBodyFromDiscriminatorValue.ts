import { deserializeIntoOddFPricePostRequestBody } from './deserializeIntoOddFPricePostRequestBody';
import { type OddFPricePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOddFPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddFPricePostRequestBody;
}
