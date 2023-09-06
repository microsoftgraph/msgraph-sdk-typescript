import { deserializeIntoEdiscoveryReviewSet } from './deserializeIntoEdiscoveryReviewSet';
import { type EdiscoveryReviewSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSet;
}
