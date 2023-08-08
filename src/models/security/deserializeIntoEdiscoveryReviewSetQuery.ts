import {deserializeIntoSearch} from './deserializeIntoSearch';
import type {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQuery(ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {} as EdiscoveryReviewSetQuery) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearch(ediscoveryReviewSetQuery),
    }
}
