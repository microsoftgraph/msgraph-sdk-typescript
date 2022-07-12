import {EdiscoveryAddToReviewSetOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryAddToReviewSetOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryAddToReviewSetOperation();
}
