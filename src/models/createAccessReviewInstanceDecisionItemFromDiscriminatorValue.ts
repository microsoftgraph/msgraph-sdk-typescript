import {AccessReviewInstanceDecisionItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemImpl();
}
