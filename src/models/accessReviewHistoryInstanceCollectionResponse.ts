import type {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewHistoryInstance[] | undefined;
}
