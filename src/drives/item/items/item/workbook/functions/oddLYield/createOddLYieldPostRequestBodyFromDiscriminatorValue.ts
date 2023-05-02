import {deserializeIntoOddLYieldPostRequestBody} from './deserializeIntoOddLYieldPostRequestBody';
import {OddLYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddLYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOddLYieldPostRequestBody;
}
