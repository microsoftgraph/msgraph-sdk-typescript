import {deserializeIntoIntRatePostRequestBody} from './deserializeIntoIntRatePostRequestBody';
import {IntRatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntRatePostRequestBody;
}
