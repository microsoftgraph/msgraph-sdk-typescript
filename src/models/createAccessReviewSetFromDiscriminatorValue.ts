import {AccessReviewSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewSetImpl();
}
