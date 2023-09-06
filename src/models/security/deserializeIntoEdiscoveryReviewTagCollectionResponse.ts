import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoveryReviewTagFromDiscriminatorValue } from './createEdiscoveryReviewTagFromDiscriminatorValue';
import { type EdiscoveryReviewTag } from './ediscoveryReviewTag';
import { type EdiscoveryReviewTagCollectionResponse } from './ediscoveryReviewTagCollectionResponse';
import { serializeEdiscoveryReviewTag } from './serializeEdiscoveryReviewTag';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewTagCollectionResponse(ediscoveryReviewTagCollectionResponse: EdiscoveryReviewTagCollectionResponse | undefined = {} as EdiscoveryReviewTagCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewTagCollectionResponse),
        "value": n => { ediscoveryReviewTagCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
