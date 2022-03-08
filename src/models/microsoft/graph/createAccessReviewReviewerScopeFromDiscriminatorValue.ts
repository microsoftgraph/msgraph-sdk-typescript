import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerScope();
}
