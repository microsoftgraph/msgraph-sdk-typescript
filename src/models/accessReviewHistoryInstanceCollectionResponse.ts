import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessReviewHistoryInstance[] | undefined;
}
