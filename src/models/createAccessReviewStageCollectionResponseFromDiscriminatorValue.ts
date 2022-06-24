import {AccessReviewStageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStageCollectionResponseImpl();
}
