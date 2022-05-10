import {AccessReviewInstanceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceCollectionResponseImpl();
}
