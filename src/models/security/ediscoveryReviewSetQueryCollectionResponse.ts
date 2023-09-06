import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSetQueryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewSetQuery[] | undefined;
}
