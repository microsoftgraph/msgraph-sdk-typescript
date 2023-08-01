import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewTagCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewTag[] | undefined;
}
