import {deserializeIntoTbillPricePostRequestBody} from './deserializeIntoTbillPricePostRequestBody';
import {TbillPricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTbillPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTbillPricePostRequestBody;
}
