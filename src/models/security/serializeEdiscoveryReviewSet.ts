import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { serializeDataSet } from './serializeDataSet';
import { serializeEdiscoveryReviewSetQuery } from './serializeEdiscoveryReviewSetQuery';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSet(writer: SerializationWriter, ediscoveryReviewSet: EdiscoveryReviewSet | undefined = {} as EdiscoveryReviewSet) : void {
        serializeDataSet(writer, ediscoveryReviewSet)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSetQuery>("queries", ediscoveryReviewSet.queries, serializeEdiscoveryReviewSetQuery);
}
