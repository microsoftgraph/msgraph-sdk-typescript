import {AccessReviewInstanceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceImpl();
}
