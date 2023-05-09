import {deserializeIntoSumIfsPostRequestBody} from './deserializeIntoSumIfsPostRequestBody';
import {SumIfsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSumIfsPostRequestBody;
}
