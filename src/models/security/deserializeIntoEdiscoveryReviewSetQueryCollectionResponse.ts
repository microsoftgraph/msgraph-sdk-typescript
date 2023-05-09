import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {EdiscoveryReviewSetQueryCollectionResponse} from './ediscoveryReviewSetQueryCollectionResponse';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQueryCollectionResponse(ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {} as EdiscoveryReviewSetQueryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetQueryCollectionResponse),
        "value": n => { ediscoveryReviewSetQueryCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
    }
}
