import { deserializeIntoEdiscoveryReviewTag } from './deserializeIntoEdiscoveryReviewTag';
import { type EdiscoveryReviewTag } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewTagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewTag;
}
