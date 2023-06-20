import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {serializeSearch} from './serializeSearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQuery(ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {} as EdiscoveryReviewSetQuery, writer: SerializationWriter) : void {
        serializeSearch(writer, ediscoveryReviewSetQuery)
}
