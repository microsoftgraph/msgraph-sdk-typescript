import {deserializeIntoEdiscoveryReviewSetCollectionResponse} from './deserializeIntoEdiscoveryReviewSetCollectionResponse';
import {EdiscoveryReviewSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSetCollectionResponse;
}
