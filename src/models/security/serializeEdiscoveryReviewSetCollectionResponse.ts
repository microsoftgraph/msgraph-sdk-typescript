import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoveryReviewSetCollectionResponse } from './ediscoveryReviewSetCollectionResponse';
import { serializeEdiscoveryReviewSet } from './serializeEdiscoveryReviewSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetCollectionResponse(writer: SerializationWriter, ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {} as EdiscoveryReviewSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSet>("value", ediscoveryReviewSetCollectionResponse.value, serializeEdiscoveryReviewSet);
}
