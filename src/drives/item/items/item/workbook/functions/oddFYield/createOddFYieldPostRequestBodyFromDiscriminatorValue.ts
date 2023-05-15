import {deserializeIntoOddFYieldPostRequestBody} from './deserializeIntoOddFYieldPostRequestBody';
import {OddFYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddFYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddFYieldPostRequestBody;
}
