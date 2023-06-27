import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewTagCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewTag[] | undefined;
}
