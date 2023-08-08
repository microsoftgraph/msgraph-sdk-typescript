import type {AccessReviewInstanceDecisionItem} from '../../../../../../../../models/accessReviewInstanceDecisionItem';
import type {BaseCollectionPaginationCountResponse} from '../../../../../../../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewInstanceDecisionItem[] | undefined;
}
