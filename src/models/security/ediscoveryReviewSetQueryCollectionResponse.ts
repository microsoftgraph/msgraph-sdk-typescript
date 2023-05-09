import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSetQueryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: EdiscoveryReviewSetQuery[] | undefined;
}
