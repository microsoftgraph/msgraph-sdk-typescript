import {deserializeIntoSumPostRequestBody} from './deserializeIntoSumPostRequestBody';
import {SumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumPostRequestBody;
}
