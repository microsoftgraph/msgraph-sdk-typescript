import {AccessReviewHistoryInstanceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryInstanceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryInstanceCollectionResponseImpl();
}
