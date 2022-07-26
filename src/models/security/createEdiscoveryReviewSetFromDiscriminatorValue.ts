import {EdiscoveryReviewSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryReviewSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryReviewSet();
}
