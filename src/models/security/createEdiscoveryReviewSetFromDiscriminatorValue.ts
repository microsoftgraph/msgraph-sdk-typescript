import {deserializeIntoEdiscoveryReviewSet} from './deserializeIntoEdiscoveryReviewSet';
import {EdiscoveryReviewSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSet;
}
