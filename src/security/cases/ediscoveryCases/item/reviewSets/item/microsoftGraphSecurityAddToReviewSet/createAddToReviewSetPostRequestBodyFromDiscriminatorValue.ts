import { deserializeIntoAddToReviewSetPostRequestBody } from './deserializeIntoAddToReviewSetPostRequestBody';
import { type AddToReviewSetPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddToReviewSetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddToReviewSetPostRequestBody;
}
