import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetCollectionResponse} from './ediscoveryReviewSetCollectionResponse';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetCollectionResponse(writer: SerializationWriter, ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {} as EdiscoveryReviewSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryReviewSetCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSet>("value", ediscoveryReviewSetCollectionResponse.value, serializeEdiscoveryReviewSet);
}
