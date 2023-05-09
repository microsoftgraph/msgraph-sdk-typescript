import {deserializeIntoPriceDiscPostRequestBody} from './deserializeIntoPriceDiscPostRequestBody';
import {PriceDiscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPriceDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPriceDiscPostRequestBody;
}
