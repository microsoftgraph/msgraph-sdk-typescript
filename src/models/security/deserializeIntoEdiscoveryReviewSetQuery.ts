import {deserializeIntoSearch} from './deserializeIntoSearch';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQuery(ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {} as EdiscoveryReviewSetQuery) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearch(ediscoveryReviewSetQuery),
    }
}
