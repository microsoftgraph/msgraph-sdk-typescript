import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import type {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import type {EdiscoveryReviewSetCollectionResponse} from './ediscoveryReviewSetCollectionResponse';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetCollectionResponse(ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {} as EdiscoveryReviewSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetCollectionResponse),
        "value": n => { ediscoveryReviewSetCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
    }
}
