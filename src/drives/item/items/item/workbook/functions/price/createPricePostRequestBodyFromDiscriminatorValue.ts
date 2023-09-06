import { deserializeIntoPricePostRequestBody } from './deserializeIntoPricePostRequestBody';
import { type PricePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPricePostRequestBody;
}
