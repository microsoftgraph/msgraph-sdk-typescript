import {deserializeIntoAccessReviewReviewer} from './deserializeIntoAccessReviewReviewer';
import {AccessReviewReviewer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewReviewer;
}
