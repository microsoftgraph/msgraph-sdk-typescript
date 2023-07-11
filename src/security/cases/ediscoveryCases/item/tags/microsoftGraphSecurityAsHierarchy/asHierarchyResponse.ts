import {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import {EdiscoveryReviewTag} from '../../../../../../models/security/ediscoveryReviewTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AsHierarchyResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewTag[] | undefined;
}
