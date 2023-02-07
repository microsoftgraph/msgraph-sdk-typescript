import {PriceDiscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPriceDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PriceDiscPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PriceDiscPostRequestBody();
}
