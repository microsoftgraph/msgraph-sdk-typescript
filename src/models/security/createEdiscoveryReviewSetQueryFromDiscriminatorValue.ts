import { deserializeIntoEdiscoveryReviewSetQuery } from './deserializeIntoEdiscoveryReviewSetQuery';
import { type EdiscoveryReviewSetQuery } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSetQuery;
}
