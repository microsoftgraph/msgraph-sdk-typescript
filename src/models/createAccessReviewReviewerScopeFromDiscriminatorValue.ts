import {AccessReviewReviewerScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerScopeImpl();
}
