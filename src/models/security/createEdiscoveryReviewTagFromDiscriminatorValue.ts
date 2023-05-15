import {deserializeIntoEdiscoveryReviewTag} from './deserializeIntoEdiscoveryReviewTag';
import {EdiscoveryReviewTag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewTagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewTag;
}
