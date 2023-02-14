import {OddLPricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddLPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OddLPricePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OddLPricePostRequestBody();
}
