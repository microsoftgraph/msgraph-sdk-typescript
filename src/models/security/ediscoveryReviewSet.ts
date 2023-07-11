import {DataSet} from './dataSet';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSet extends DataSet, Parsable {
    /**
     * Represents queries within the review set.
     */
    queries?: EdiscoveryReviewSetQuery[] | undefined;
}
