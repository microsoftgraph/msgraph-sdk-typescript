import {deserializeIntoMedianPostRequestBody} from './deserializeIntoMedianPostRequestBody';
import {MedianPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMedianPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMedianPostRequestBody;
}
