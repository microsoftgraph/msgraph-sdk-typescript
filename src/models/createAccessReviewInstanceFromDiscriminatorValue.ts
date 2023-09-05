import { deserializeIntoAccessReviewInstance } from './deserializeIntoAccessReviewInstance';
import { type AccessReviewInstance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstance;
}
