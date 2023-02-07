import {PriceMatPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPriceMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PriceMatPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PriceMatPostRequestBody();
}
