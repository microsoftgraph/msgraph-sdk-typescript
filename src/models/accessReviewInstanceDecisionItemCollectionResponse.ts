import { type AccessReviewInstanceDecisionItem } from './accessReviewInstanceDecisionItem';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewInstanceDecisionItem[] | undefined;
}
