import {deserializeIntoSumSqPostRequestBody} from './deserializeIntoSumSqPostRequestBody';
import {SumSqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumSqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumSqPostRequestBody;
}
