import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {serializeDataSet} from './serializeDataSet';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSet(writer: SerializationWriter, ediscoveryReviewSet: EdiscoveryReviewSet | undefined = {} as EdiscoveryReviewSet) : void {
        serializeDataSet(writer, ediscoveryReviewSet)
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSetQuery>("queries", ediscoveryReviewSet.queries, serializeEdiscoveryReviewSetQuery);
}
