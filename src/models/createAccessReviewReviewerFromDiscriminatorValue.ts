import { deserializeIntoAccessReviewReviewer } from './deserializeIntoAccessReviewReviewer';
import { type AccessReviewReviewer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewReviewer;
}
