import {deserializeIntoPricePostRequestBody} from './deserializeIntoPricePostRequestBody';
import {PricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPricePostRequestBody;
}
