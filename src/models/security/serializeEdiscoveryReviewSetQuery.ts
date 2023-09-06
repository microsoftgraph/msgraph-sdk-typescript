import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { serializeSearch } from './serializeSearch';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQuery(writer: SerializationWriter, ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {} as EdiscoveryReviewSetQuery) : void {
        serializeSearch(writer, ediscoveryReviewSetQuery)
}
