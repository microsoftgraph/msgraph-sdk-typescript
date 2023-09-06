import { deserializeIntoEdiscoveryAddToReviewSetOperation } from './deserializeIntoEdiscoveryAddToReviewSetOperation';
import { type EdiscoveryAddToReviewSetOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryAddToReviewSetOperation;
}
