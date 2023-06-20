import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {EdiscoveryReviewSetQueryCollectionResponse} from './ediscoveryReviewSetQueryCollectionResponse';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQueryCollectionResponse(ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {} as EdiscoveryReviewSetQueryCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetQueryCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSetQuery>("value", ediscoveryReviewSetQueryCollectionResponse.value, serializeEdiscoveryReviewSetQuery);
}
