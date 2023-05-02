import {deserializeIntoAccessReviewInstanceDecisionItem} from './deserializeIntoAccessReviewInstanceDecisionItem';
import {AccessReviewInstanceDecisionItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItem;
}
