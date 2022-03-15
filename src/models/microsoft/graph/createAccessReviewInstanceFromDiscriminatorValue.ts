import {AccessReviewInstance} from './accessReviewInstance';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstance();
}
