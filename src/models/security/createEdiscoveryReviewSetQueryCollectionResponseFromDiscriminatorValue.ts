import {deserializeIntoEdiscoveryReviewSetQueryCollectionResponse} from './deserializeIntoEdiscoveryReviewSetQueryCollectionResponse';
import {EdiscoveryReviewSetQueryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryReviewSetQueryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryReviewSetQueryCollectionResponse;
}
