import { deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse } from './deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse';
import { type AccessReviewInstanceDecisionItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse;
}
