import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import type {EdiscoveryReviewTagCollectionResponse} from './ediscoveryReviewTagCollectionResponse';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewTagCollectionResponse(writer: SerializationWriter, ediscoveryReviewTagCollectionResponse: EdiscoveryReviewTagCollectionResponse | undefined = {} as EdiscoveryReviewTagCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewTagCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("value", ediscoveryReviewTagCollectionResponse.value, serializeEdiscoveryReviewTag);
}
