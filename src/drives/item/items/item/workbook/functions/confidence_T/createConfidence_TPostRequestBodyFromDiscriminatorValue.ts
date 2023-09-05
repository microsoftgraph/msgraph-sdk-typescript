import { deserializeIntoConfidence_TPostRequestBody } from './deserializeIntoConfidence_TPostRequestBody';
import { type Confidence_TPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfidence_TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfidence_TPostRequestBody;
}
