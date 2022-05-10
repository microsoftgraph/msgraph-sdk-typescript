import {AccessReviewReviewerCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewReviewerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewReviewerCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewReviewerCollectionResponseImpl();
}
