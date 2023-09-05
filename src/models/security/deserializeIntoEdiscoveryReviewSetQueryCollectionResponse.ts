import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoveryReviewSetQueryFromDiscriminatorValue } from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type EdiscoveryReviewSetQueryCollectionResponse } from './ediscoveryReviewSetQueryCollectionResponse';
import { serializeEdiscoveryReviewSetQuery } from './serializeEdiscoveryReviewSetQuery';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQueryCollectionResponse(ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {} as EdiscoveryReviewSetQueryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetQueryCollectionResponse),
        "value": n => { ediscoveryReviewSetQueryCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
    }
}
