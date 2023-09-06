import { deserializeIntoPriceMatPostRequestBody } from './deserializeIntoPriceMatPostRequestBody';
import { type PriceMatPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPriceMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPriceMatPostRequestBody;
}
