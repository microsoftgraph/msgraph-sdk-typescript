import {AccessReviewInstanceDecisionItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemCollectionResponseImpl();
}
