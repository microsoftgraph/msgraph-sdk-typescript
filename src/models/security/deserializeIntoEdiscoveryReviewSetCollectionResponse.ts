import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetCollectionResponse} from './ediscoveryReviewSetCollectionResponse';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetCollectionResponse(ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {} as EdiscoveryReviewSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetCollectionResponse),
        "value": n => { ediscoveryReviewSetCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
    }
}
