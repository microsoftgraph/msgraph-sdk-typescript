import {AccessReviewScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScopeImpl();
}
