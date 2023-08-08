import type {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessReviewHistoryDefinition[] | undefined;
}
