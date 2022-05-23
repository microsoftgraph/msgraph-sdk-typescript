import {AccessReviewInstanceDecisionItemResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemResourceImpl();
}
