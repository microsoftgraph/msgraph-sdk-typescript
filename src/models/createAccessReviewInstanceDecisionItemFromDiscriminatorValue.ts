import { deserializeIntoAccessReviewInstanceDecisionItem } from './deserializeIntoAccessReviewInstanceDecisionItem';
import { type AccessReviewInstanceDecisionItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItem;
}
