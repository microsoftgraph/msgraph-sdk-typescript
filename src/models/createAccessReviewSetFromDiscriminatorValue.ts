import { deserializeIntoAccessReviewSet } from './deserializeIntoAccessReviewSet';
import { type AccessReviewSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewSet;
}
