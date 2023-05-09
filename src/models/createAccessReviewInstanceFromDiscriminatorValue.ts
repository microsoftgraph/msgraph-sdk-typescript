import {deserializeIntoAccessReviewInstance} from './deserializeIntoAccessReviewInstance';
import {AccessReviewInstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstance;
}
