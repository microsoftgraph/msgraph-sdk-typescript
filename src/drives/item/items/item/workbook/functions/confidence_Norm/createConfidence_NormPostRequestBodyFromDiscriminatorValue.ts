import { deserializeIntoConfidence_NormPostRequestBody } from './deserializeIntoConfidence_NormPostRequestBody';
import { type Confidence_NormPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfidence_NormPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfidence_NormPostRequestBody;
}
