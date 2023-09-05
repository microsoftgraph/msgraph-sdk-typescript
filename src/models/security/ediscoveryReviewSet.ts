import { type DataSet } from './dataSet';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSet extends DataSet, Parsable {
    /**
     * Represents queries within the review set.
     */
    queries?: EdiscoveryReviewSetQuery[] | undefined;
}
