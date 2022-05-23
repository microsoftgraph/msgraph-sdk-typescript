import {AccessReviewReviewerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerImpl();
}
