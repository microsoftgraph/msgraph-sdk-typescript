import {PricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PricePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PricePostRequestBody();
}
