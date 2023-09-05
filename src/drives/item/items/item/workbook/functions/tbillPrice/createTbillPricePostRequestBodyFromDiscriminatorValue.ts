import { deserializeIntoTbillPricePostRequestBody } from './deserializeIntoTbillPricePostRequestBody';
import { type TbillPricePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTbillPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTbillPricePostRequestBody;
}
