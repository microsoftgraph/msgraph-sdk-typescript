import {deserializeIntoOddFPricePostRequestBody} from './deserializeIntoOddFPricePostRequestBody';
import {OddFPricePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddFPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddFPricePostRequestBody;
}
