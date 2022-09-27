import {AccessReviewApplyActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewApplyActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewApplyActionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewApplyActionCollectionResponse();
}
