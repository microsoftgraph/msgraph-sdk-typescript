import type {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import type {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AsHierarchyResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewTag[] | undefined;
}
