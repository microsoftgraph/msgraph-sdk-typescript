import { deserializeIntoIntRatePostRequestBody } from './deserializeIntoIntRatePostRequestBody';
import { type IntRatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntRatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntRatePostRequestBody;
}
