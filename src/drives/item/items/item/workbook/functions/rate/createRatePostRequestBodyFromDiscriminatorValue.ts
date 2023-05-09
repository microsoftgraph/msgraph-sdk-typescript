import {deserializeIntoRatePostRequestBody} from './deserializeIntoRatePostRequestBody';
import {RatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRatePostRequestBody;
}
