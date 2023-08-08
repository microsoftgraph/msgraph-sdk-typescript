import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import type {EdiscoveryReviewSetQueryCollectionResponse} from './ediscoveryReviewSetQueryCollectionResponse';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQueryCollectionResponse(writer: SerializationWriter, ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {} as EdiscoveryReviewSetQueryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetQueryCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSetQuery>("value", ediscoveryReviewSetQueryCollectionResponse.value, serializeEdiscoveryReviewSetQuery);
}
