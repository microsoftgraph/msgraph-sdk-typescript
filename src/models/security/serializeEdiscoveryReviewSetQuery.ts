import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {serializeSearch} from './serializeSearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQuery(writer: SerializationWriter, ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {} as EdiscoveryReviewSetQuery) : void {
        serializeSearch(writer, ediscoveryReviewSetQuery)
}
