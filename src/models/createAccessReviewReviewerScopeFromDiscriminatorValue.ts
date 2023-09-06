import { deserializeIntoAccessReviewReviewerScope } from './deserializeIntoAccessReviewReviewerScope';
import { type AccessReviewReviewerScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewReviewerScope;
}
