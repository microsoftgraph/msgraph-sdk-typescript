import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewSet[] | undefined;
}
